import { useRef, useState } from 'react';

import {
  alphaLower,
  CharsetState,
  toRealSet,
} from './charset';
import { Password } from './Password';
import { pwgenFactory } from './pwgenFactory';
import { useDebounce } from './useDebounce';

export interface PasswordOptions {
  charset: CharsetState;
  length: number;
}

export type PasswordUserOptions = Partial<PasswordOptions>;

export type PasswordRenderer = (key: number) => JSX.Element;
export type UpdatePasswordOptions = (options: PasswordUserOptions) => void;

export const combinePasswordOptions = (
  oldOptions?: PasswordUserOptions, 
  newOptions?: PasswordUserOptions
): PasswordOptions => ({
  charset: {
    ...oldOptions?.charset,
    ...newOptions?.charset,
  },
  length: newOptions?.length ?? oldOptions?.length ?? 8,
});

export const deepEqual = (left: object, right: object): boolean => {
  const leftStr = JSON.stringify(left);
  const rightStr = JSON.stringify(right);
  return leftStr === rightStr;
};

export function usePasswordRenderer({ length, charset }: PasswordOptions): PasswordRenderer {
  const realSets = Object.entries<boolean>(charset).map(toRealSet);
  const generator = pwgenFactory(length, alphaLower, ...realSets);
  const renderer: PasswordRenderer = (seed: number) => <Password key={seed} {...{generator, seed}} />;
  return renderer;
}

export function usePasswordGenerator(): [PasswordRenderer, UpdatePasswordOptions] {
  const pending = useRef<PasswordOptions>({ charset: {}, length: 0 });
  const [current, setOptions] = useState<PasswordOptions>(pending.current);
  const debounce = useDebounce(200);
  const renderer = usePasswordRenderer(current);

  const update: UpdatePasswordOptions = (options: PasswordUserOptions) => {
    pending.current = combinePasswordOptions(pending.current, options);
    debounce(() => {
      if (!deepEqual(current, pending.current)) {
        setOptions(pending.current);
      }
    });
  };

  console.log('render');

  return [renderer, update];
}
