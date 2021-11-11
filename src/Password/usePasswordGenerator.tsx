import {
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

export function usePasswordGenerator(): [PasswordRenderer, UpdatePasswordOptions] {
  const [activeSets, setCharset] = useState<CharsetState>({});
  const [activeLength, setLength] = useState<number>(8);

  const realSets = Object.entries<boolean>(activeSets).map(toRealSet);
  const generator = pwgenFactory(activeLength, alphaLower, ...realSets);
  const renderer: PasswordRenderer = (key: number) => <Password key={key} {...{generator}} />;

  const update: UpdatePasswordOptions = ({ charset, length }: PasswordOptions) => {
    if (charset !== undefined) {
      setCharset({...activeSets, ...charset});
    }
    if (length !== undefined && length >= 4) {
      setLength(length);
    }
  };
  return [renderer, update];
}
