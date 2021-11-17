import {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface InfiniScrollState {
  list: InfiniCell[],
  loader: RefObject<HTMLDivElement>;
  grid: RefObject<HTMLElement>;
  standard: RefObject<HTMLDivElement>;
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



interface ListModifiers {
  size: number, 
  slice?: boolean, 
  generator: InfiniGenerator,
}


const extendListToSize = (list: InfiniCell[], { generator, size }: ListModifiers): InfiniCell[] => {

  if (list.length > size) {
    return list;
  }

  list = [...list];

  let lastIndex = (list[list.length - 1]?.id ?? -1) + 1;
  while (list.length < size) {
    list.push(generator(lastIndex++));
  }

  return list;
};

export const refreshList = ({ size, slice, generator }: ListModifiers) => (list: InfiniCell[]): InfiniCell[] => {

  if (!slice && list.length > size) {
    return list;
  }

  if (slice) {
    const twoThirds = Math.ceil(size * 2 / 3);
    list = list.slice(list.length - twoThirds);
  }

  return extendListToSize(list, {size, generator});
};


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

interface Refresh {
  slice?: boolean,
}

export function useInfiniScroll(generator: InfiniGenerator): InfiniScrollState {

  const [needRefresh, setRefresh] = useState<Refresh>({ slice: false });
  const [list, listUpdate] = useState<InfiniCell[]>([]);
  const loader = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLElement>(null);
  const standard = useRef<HTMLDivElement>(null);
  const size = useRef<number>(0);

  const refresh = useCallback((options?: Refresh) => setRefresh(() => ({ ...options })), []);

  useEffect(() => {

    if (!loader.current) {
      console.warn('useInfiniScroll IntersectionObserver not ready');
      return;
    }

    const handleIntersection = ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
      if (isIntersecting) {
        //grid.current?.scrollTo(0, 0);
        refresh({ slice: true });
      }
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection);
    intersectionObserver.observe(loader.current);

    return () => intersectionObserver.disconnect();

  }, [refresh]);

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

    const handleResize = (entries: ResizeObserverEntry[]) => {

      for (const { contentRect, target } of entries) {
        if (target === standard.current) {
          context.iw = contentRect.width + 8;
          context.ih = contentRect.height + 8;
        }

        if (target === grid.current) {
          context.cw = contentRect.width;
          context.ch = contentRect.height;
        }
      }

      if (context.iw && context.ih) {
        const rows = Math.floor(context.ch / context.ih);
        const cols = Math.floor(context.cw / context.iw);
        const count = Math.floor(rows * cols) * 2;

        if (count > 0 && size.current <= count) {
          refresh();
          //listUpdate(refreshList({ size: count, generator }));
        }

        size.current = count;
        console.log(context, count);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(grid.current);
    resizeObserver.observe(standard.current);

    return () => resizeObserver.disconnect();

  }, [refresh]);

  useEffect(refresh, [generator, refresh]);

  useEffect(() => {

    const timeout = setTimeout(() => 
      listUpdate(refreshList({ 
        ...needRefresh, 
        size: size.current, 
        generator 
      })
      ), 500);

    return () => clearTimeout(timeout);

  }, [generator, needRefresh]);

  return { grid, list, standard, loader };
}
