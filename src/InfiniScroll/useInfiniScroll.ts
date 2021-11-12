import {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

export type renderInfiniScroll = (key: number) => JSX.Element;

export interface InfiniScrollProps {
  length: number;
  render: renderInfiniScroll;
}

export interface InfiniScrollState {
  list: number[],
  loader: MutableRefObject<null>;
}

export const intersectionObserverInit: IntersectionObserverInit = {
  root: null,
  rootMargin: '20px',
  threshold: 0
};

export function extendList(old: number[]): number[] {

  const length = old.length;
  const lastIndex = (length === 0 ? -1 : old[length - 1]) + 1;
  const newList = old.slice(length - 25);

  for (let i = lastIndex; i < lastIndex + 25; i++) {
    newList.push(i);
  }

  return newList;
}

export function useInfiniScroll(): InfiniScrollState {

  const [list, listUpdate] = useState<number[]>([]);
  const loader = useRef(null);

  useEffect(() => {

    if (!loader.current) {
      return;
    }

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) {
        listUpdate(extendList);
      }
    };

    const observer = new IntersectionObserver(handleObserver, intersectionObserverInit);
    observer.observe(loader.current);

    return () => observer.disconnect();

  }, []);

  return { list, loader };
}
