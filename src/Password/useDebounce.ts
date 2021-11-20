import { useCallback, useEffect, useRef } from 'react';

export interface DebounceContext {
  timeout?: number;
}

export type DebounceCallback = () => void;
export type Debounce = (callback: DebounceCallback) => void;
export function useDebounce(delay: number): Debounce {
  const context = useRef<DebounceContext>({ });

  const debounce = useCallback<Debounce>((callback: DebounceCallback): void => {
    clearTimeout(context.current.timeout);
    context.current.timeout = setTimeout(callback, delay) as unknown as number;
  }, [delay]);

  useEffect(() => () => clearTimeout(context.current.timeout), [delay]);

  return debounce;
}
