import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface InfiniScrollState {
  grid: RefObject<HTMLElement>;
  list: InfiniCell[],
  loader: RefObject<HTMLElement>;
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

export interface ListModifiers {
  full?: boolean,
  generator: InfiniGenerator,
  size: number, 
  slice?: boolean, 
}

const getLastIndex = (list: InfiniCell[]): number => (list[list.length - 1]?.id ?? -1) + 1;

export const extendListToSize = (list: InfiniCell[], { generator, size }: ListModifiers): InfiniCell[] => {
  if (list.length > size) {
    return list;
  }
  list = [...list];
  let lastIndex = getLastIndex(list);
  while (list.length < size) {
    list.push(generator(lastIndex++));
  }
  return list;
};

export const refreshList = ({ full, size, slice, generator }: ListModifiers) => (list: InfiniCell[]): InfiniCell[] => {
  if (!slice && list.length > size) {
    return list;
  }

  if (full) {
    const lastIndex = getLastIndex(list);
    list = [generator(lastIndex)];
  } else if (slice) {
    const twoThirds = Math.ceil(size * 2 / 3);
    list = list.slice(list.length - twoThirds);
  }

  return extendListToSize(list, { generator, size });
};

export interface Refresh {
  done?: boolean,
  full?: boolean,
  slice?: boolean,
}

export type Refresher = (options?: Refresh) => void;

export function useInfiniScrollLoader(refresh: Refresher): RefObject<HTMLElement> {
  const loader = useRef<HTMLElement>(null);

  useEffect(() => {

    if (!loader.current) {
      console.warn('useInfiniScroll IntersectionObserver not ready');
      return;
    }

    const handleIntersection = ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
      if (isIntersecting) {
        refresh({ slice: true });
      }
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection);
    intersectionObserver.observe(loader.current);

    return () => intersectionObserver.disconnect();

  }, [refresh]);

  return loader;
}

export function useInfiniScrollSize(refresh: Refresher, size: MutableRefObject<number>): [RefObject<HTMLElement>, RefObject<HTMLDivElement>] {
  const grid = useRef<HTMLElement>(null);
  const standard = useRef<HTMLDivElement>(null);

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
        }

        size.current = count;
        console.log(context, count);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(grid.current);
    resizeObserver.observe(standard.current);

    return () => resizeObserver.disconnect();

  }, [refresh, size]);

  return [grid, standard];

}

export function useInfiniScroll(generator: InfiniGenerator): InfiniScrollState {

  const [list, listUpdate] = useState<InfiniCell[]>([]);
  const [needRefresh, setRefresh] = useState<Refresh>({ done: true });
  const size = useRef<number>(0);
  const refresh = useCallback((options?: Refresh) => 
    setRefresh((previous) => 
      ({ ...previous, ...options, done: false })), []);

  const loader = useInfiniScrollLoader(refresh);
  const [grid, standard] = useInfiniScrollSize(refresh, size);

  useEffect(() => refresh({ full: true }), [generator, refresh]);

  useEffect(() => {

    console.log({needRefresh});

    if (needRefresh.done) {
      return;
    }

    const cb = () => {
      setRefresh({ done: true });
      listUpdate(
        refreshList({ 
          ...needRefresh, 
          size: size.current, 
          generator,
        })
      );
    };

    const timeout = setTimeout(cb, 500);
    return () => clearTimeout(timeout);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needRefresh]);

  return { grid, list, standard, loader };
}
