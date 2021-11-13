import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

export type renderInfiniScroll = (key: number) => JSX.Element;

export interface InfiniScrollProps {
  render: renderInfiniScroll;
}

export interface InfiniScrollState {
  list: number[],
  loader: MutableRefObject<null>;
  grid: MutableRefObject<null>;
}

export const extendList = (size: number) => (old: number[]): number[] => {

  const threeFourths = Math.ceil(size * 3 / 4);
  const newList = old.slice(old.length - threeFourths);
  let lastIndex = (newList[newList.length - 1] ?? -1) + 1;

  while (newList.length < size) {
    newList.push(lastIndex++);
  }

  return newList;
};

export function useInfiniScroll(): InfiniScrollState {

  const [list, listUpdate] = useState<number[]>([]);
  const loader = useRef(null);
  const grid = useRef(null);
  const size = useRef<number>(0);

  useEffect(() => {

    if (!grid.current || !loader.current) {
      console.warn('useInfiniScroll not ready');
      return;
    }


    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) {
        listUpdate(extendList(size.current));
      }
    };

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
          listUpdate(extendList(count));
          size.current = count;
        }
      }
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection);
    intersectionObserver.observe(loader.current);

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(grid.current);
    resizeObserver.observe(loader.current);

    return () => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
    };

  }, []);

  return { grid, list, loader };
}
