import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface InfiniScrollState {
  list: InfiniCell[],
  loader: MutableRefObject<null>;
  grid: MutableRefObject<null>;
  standard: MutableRefObject<null>;
  rotate: () => void;
}


export interface InfiniCell {

  // unique identifier for the cell
  id: number;

  // cell content promise
  promise?: Promise<string>;

  // content promise cancelation
  cancel?: () => void;

  // actual value
  value: string;

  // promise resolution
  ready: boolean;
}

export type InfiniGenerator = (id: number) => InfiniCell;


export const extendList = (targetSize: number, generator: InfiniGenerator) => (old: InfiniCell[]): InfiniCell[] => {

  const threeFourths = old.length - Math.round(targetSize * 3 / 4);

  old.slice(0, threeFourths).forEach(({ cancel }) => cancel?.());


  const newList = old.slice(threeFourths);
  let lastIndex = (newList[newList.length - 1]?.id ?? -1) + 1;

  while (newList.length < targetSize) {
    newList.push(generator(lastIndex++));
  }

  return newList;
};

export function useInfiniScroll(generator: InfiniGenerator): InfiniScrollState {

  const [list, listUpdate] = useState<InfiniCell[]>([]);
  const loader = useRef(null);
  const grid = useRef(null);
  const standard = useRef(null);
  const size = useRef<number>(0);

  useEffect(() => {

    if (!loader.current) {
      console.warn('useInfiniScroll IntersectionObserver not ready');
      return;
    }


    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) {
        listUpdate(extendList(size.current, generator));
      }
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection);
    intersectionObserver.observe(loader.current);

    return () => intersectionObserver.disconnect();

  }, [generator]);

  useEffect(() => {

    if (!grid.current || !standard.current) {
      console.warn('useInfiniScroll ResizeObserver not ready');
      return;
    }

    const context = {
      cw: 0,
      ch: 0,
      iw: 0,
      ih: 0,
    };

    const handleResize = ([{ contentRect, target }]: ResizeObserverEntry[]) => {

      if (target === loader.current) {
        context.iw = contentRect.width;
        context.ih = contentRect.height;
      }

      if (target === grid.current) {
        context.cw = contentRect.width;
        context.ch = contentRect.height;
      }

      if (context.iw && context.ih) {
        const rows = context.ch / context.ih;
        const cols = context.cw / context.iw;
        const count = Math.ceil(rows * cols) * 2;
          
        if (count > 0 && size.current <= count) {
          listUpdate(extendList(count, generator));
          size.current = count;
        }
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(grid.current);
    resizeObserver.observe(standard.current);

    return () => resizeObserver.disconnect();

  }, [generator]);

  const rotate = useCallback(() => {
    listUpdate(extendList(4, generator));
  }, [generator]);

  return { grid, list, standard, loader, rotate };
}
