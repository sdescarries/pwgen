import {
  useRef,
  useState,
} from 'react';

import {
  alphaLower,
  CharsetState,
  toRealSet,
} from './charset';
import { Password } from './Password';
import { pwgenFactory } from './pwgenFactory';

export interface PasswordOptions {
  charset?: CharsetState;
  length?: number;
}

export type PasswordRenderer = (key: number) => JSX.Element;
export type UpdatePasswordOptions = (options: PasswordOptions) => void;

interface Debounce {
  timeout?: NodeJS.Timeout;
}

export function usePasswordGenerator(): [PasswordRenderer, UpdatePasswordOptions] {
  const [{charset = {}, length = 8}, setOptions] = useState<PasswordOptions>({});
  const debounce = useRef<Debounce>({});

  const realSets = Object.entries<boolean>(charset).map(toRealSet);
  const generator = pwgenFactory(length, alphaLower, ...realSets);
  const renderer: PasswordRenderer = (key: number) => <Password key={key} {...{generator}} />;
  const update: UpdatePasswordOptions = (options: PasswordOptions) => {

    if (debounce.current.timeout) {
      clearTimeout(debounce.current.timeout);
    }

    debounce.current.timeout = setTimeout(() => {
      setOptions({ 
        charset: {...charset, ...options.charset},
        length: options.length ?? length,
      });
    }, 500);
  };

  console.log('render');

  return [renderer, update];
}
