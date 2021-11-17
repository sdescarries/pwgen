import pLimit from 'p-limit';
import { useRef, useState } from 'react';

import { InfiniCell, InfiniGenerator } from '@/InfiniScroll/useInfiniScroll';

import {
  alphaLower,
  toRealSet,
} from './charset';
import { Password } from './Password';
import { pwgenFactory } from './pwgenFactory';
import { PasswordOptions, PasswordRenderer, PasswordUserOptions, pwgen, UpdatePasswordOptions } from './types';
import { useDebounce } from './useDebounce';

const limit = pLimit(1);

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

export function usePasswordGenerator({ length, charset }: PasswordOptions): pwgen {
  const realSets = Object.entries<boolean>(charset).map(toRealSet);
  return pwgenFactory(length, alphaLower, ...realSets);
}

interface PasswordContext {
  generator: InfiniGenerator;
  options: PasswordOptions;
  update: UpdatePasswordOptions;
}

const sleep = () => new Promise(resolve => setTimeout(resolve, 100));

export function usePasswordContext(): PasswordContext {
  const pending = useRef<PasswordOptions>({ charset: {}, length: 0 });
  const [current, setOptions] = useState<PasswordOptions>(pending.current);
  const debounce = useDebounce(200);
  const pwgen = usePasswordGenerator(current);

  const generator: InfiniGenerator = (id: number): InfiniCell => {

    const cancelation = {
      live: true
    };

    const value = ''.padEnd(current?.length, '_');

    const cancel = () => {
      cancelation.live = false;
    };

    const infiniCell: InfiniCell = {
      id,
      value,
      ready: false,
      cancel,
    };

    infiniCell.promise = limit(() => 
      sleep()
        .then(() => {

          if (!cancelation.live) {
            return infiniCell.value;
          }

          return pwgen();
        })
        .then(word => {
          infiniCell.value = word;
          infiniCell.ready = true;

          delete infiniCell.promise;
          delete infiniCell.cancel;

          return word;
        })
    );

    return infiniCell;
  };

  const update: UpdatePasswordOptions = (options: PasswordUserOptions) => {
    pending.current = combinePasswordOptions(pending.current, options);
    debounce(() => {
      if (!deepEqual(current, pending.current)) {
        setOptions(pending.current);
      }
    });
  };

  console.log('render');

  return ({
    generator,
    options: current,
    update,
  });
}
