import { useRef } from 'react';

export interface DebounceContext {
  timeout?: NodeJS.Timeout;
}

export type DebounceCallback = () => void;
export type Debounce = (callback: DebounceCallback) => void;
export function useDebounce(delay: number): Debounce {
  const context = useRef<DebounceContext>({});

  const debounce: Debounce = (callback: DebounceCallback): void => {
    if (context.current?.timeout != null) {
      clearTimeout(context.current.timeout);
    }
    context.current.timeout = setTimeout(callback, delay);
  };

  return debounce;
}
