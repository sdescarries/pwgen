import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { PasswordOptions, WordGenerator } from '@/Password';

export interface InfiniScrollState {

  // container element for the infinite scroll
  grid: RefObject<HTMLElement>;

  // table data
  list: InfiniCell[],

  // infini scroll bottom of view observer
  loader: RefObject<HTMLElement>;

  // cell size observer
  standard: RefObject<HTMLDivElement>;
}

export interface InfiniCell {
  // unique identifier for the cell
  id: number;

  // word length
  length: number;

  // consume and erase value
  shred: (index: number) => void;

  // actual value
  value?: string;
}


export interface ListModifiers {

  // should the whole list be refreshed
  full?: boolean;

  // should a slice be replaced
  slice?: boolean; 

  // consume and erase value
  shred: (index: number) => void;

  // number of visible lines in table
  rows: MutableRefObject<number>;

  // number of visible columns in table
  cols: MutableRefObject<number>;

  // write cursor index in array
  index: MutableRefObject<number>;

  // word length for placeholder
  length: number;
}

export interface Refresh {
  done?: boolean,
  full?: boolean,
  slice?: boolean,
}

export type Refresher = (options?: Refresh) => void;

export interface ResizeHandlerProps {
  cols: MutableRefObject<number>;
  rows: MutableRefObject<number>;

  grid: RefObject<HTMLElement>;
  standard: RefObject<HTMLDivElement>;

  refresh: Refresher;
}

export const getLastIndex = (list: InfiniCell[]): number => (list[list.length - 1]?.id ?? -1) + 1;

export const extendListToSize = (list: InfiniCell[], { length, cols, rows, shred }: ListModifiers): InfiniCell[] => {
  const size = cols.current * rows.current;
  if (list.length > size) {
    return list.slice(0, size);
  }
  
  let lastIndex = getLastIndex(list);
  list = [...list];
  while (list.length < size) {
    list.push({ id: lastIndex++, length, shred, value: '' });
  }
  
  return list;
};

export const refreshList = (mods: ListModifiers) => (list: InfiniCell[]): InfiniCell[] => {

  const {
    cols,
    full,
    index,
    rows,
    slice,
    shred,
    length,
  } = mods;

  if (full) {
    const lastIndex = getLastIndex(list);
    list = [{ id: lastIndex, length, shred, value: '' }];
    index.current = 0;
  } else if (slice) {
    const oneThird = Math.ceil(rows.current / 3) * cols.current;
    list = list.slice(oneThird);
    index.current = Math.max(0, index.current - oneThird);
  }

  return extendListToSize(list, mods);
};

export function useInfiniScrollLoader(refresh: Refresher): [RefObject<HTMLElement>] {
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

  return [loader];
}

interface ResizeContext {
  cw: number;
  ch: number;
  iw: number;
  ih: number;
}

const makeResizeContext = (): ResizeContext => ({
  cw: 0,
  ch: 0,
  iw: 0,
  ih: 0,
});

const updateResizeContext = (props: ResizeHandlerProps, context: ResizeContext, entries: ResizeObserverEntry[]) => {
  const { grid, standard } = props;
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
};

export function makeResizeHandler(props: ResizeHandlerProps) {

  const context = makeResizeContext();
  const handleResize = (entries: ResizeObserverEntry[]) => {

    updateResizeContext(props, context, entries);
    
    let needRefresh = false;
    if (context.iw && context.ih) {
      const rows = Math.floor(context.ch / context.ih) * 2;
      const cols = Math.floor(context.cw / context.iw);

      if (props.rows.current != rows) {
        props.rows.current = rows;
        needRefresh = true;
      }

      if (props.cols.current != cols) {
        props.cols.current = cols;
        needRefresh = true;
      }
    }

    if (needRefresh) {
      props.refresh();
    }
  };

  return handleResize;
}

export function useInfiniScrollSize(
  refresh: Refresher,
  cols: MutableRefObject<number>,
  rows: MutableRefObject<number>,
): [RefObject<HTMLElement>, RefObject<HTMLDivElement>] {
  const grid = useRef<HTMLElement>(null);
  const standard = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!grid.current || !standard.current) {
      console.warn('useInfiniScroll ResizeObserver not ready');
      return;
    }

    const handleResize = makeResizeHandler({ cols, rows, grid, standard, refresh });
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(grid.current);
    resizeObserver.observe(standard.current);
    return () => resizeObserver.disconnect();
  }, [cols, rows, refresh]);

  return [grid, standard];
}

const promiseAnimationFrame = () => new Promise(resolve => requestAnimationFrame(resolve));

const fillList = (index: MutableRefObject<number>, value: string) => (oldList: InfiniCell[]) => {
  const cell = oldList[index.current];

  if (!cell) {
    return oldList;
  }

  const newList = [...oldList];
  newList[index.current] = {
    ...cell,
    value,
  };

  index.current++;
  return newList;
};

const shredder = (index: number) => (oldList: InfiniCell[]) => {
  const cell = oldList[index];

  if (!cell) {
    return oldList;
  }

  const newList = [...oldList];
  newList[index] = {
    ...cell,
    value: '',
  };

  return newList;
};

export interface InfiniScrollProps extends PasswordOptions {
  generator: WordGenerator;
}

export function useInfiniScroll({ generator, length }: InfiniScrollProps): InfiniScrollState {

  const [list, listUpdate] = useState<InfiniCell[]>([]);
  const cols = useRef<number>(0);
  const rows = useRef<number>(0);
  const index = useRef<number>(0);

  const [needRefresh, setRefresh] = useState<Refresh>({ done: true });
  const refresh = useCallback((options?: Refresh) => 
    setRefresh((previous) => 
      ({ ...previous, ...options, done: false })), []);

  const [loader] = useInfiniScrollLoader(refresh);
  const [grid, standard] = useInfiniScrollSize(refresh, cols, rows);

  useEffect(() => refresh({ full: true }), [generator, length, refresh]);

  const shred = useCallback((index: number) => listUpdate(shredder(index)), []);

  useEffect(() => {

    if (needRefresh.done) {
      return;
    }

    if (!length) {
      return;
    }

    listUpdate(
      refreshList({ 
        ...needRefresh,
        cols,
        index,
        length,
        shred,
        rows,
      })
    );

    setRefresh({ done: true });

  }, [length, needRefresh, shred]);

  useEffect(() => {
    let alive = true;

    if (!length) {
      return;
    }

    Promise
      .resolve()
      .then(async () => {
        const size = rows.current * cols.current;
        while(alive && index.current < size) {
          const value = await generator();
          await promiseAnimationFrame();
          listUpdate(fillList(index, value));
        }
      })
      .catch(console.warn);

    return () => {
      alive = false;
    };
  }, [generator, length, needRefresh]);

  return { grid, list, loader, standard };
}
