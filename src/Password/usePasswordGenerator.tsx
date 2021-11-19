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

interface Cancelation {
  live: boolean;
  timeout?: NodeJS.Timeout;
  resolve?: () => void;
}


export function usePasswordContext(): PasswordContext {
  const pending = useRef<PasswordOptions>({ charset: {}, length: 0 });
  const [current, setOptions] = useState<PasswordOptions>(pending.current);
  const debounce = useDebounce(200);
  const pwgen = usePasswordGenerator(current);

  const generator: InfiniGenerator = (id: number): InfiniCell => {

    const cancelation: Cancelation = {
      live: true,
    };

    const value = ''.padEnd(current?.length, '_');

    const infiniCell: InfiniCell = {
      id,
      ready: false,
      value,
    };

    infiniCell.cancel = () => {
      cancelation.live = false;
      delete infiniCell.cancel;

      if (cancelation.resolve) {
        cancelation.resolve();
      }

      if (cancelation.timeout != null) {
        clearTimeout(cancelation.timeout);
        delete cancelation.timeout;
      }
    };

    const spark = () => 
      new Promise<void>(resolve => {
        cancelation.resolve = resolve;
        cancelation.timeout = setTimeout(resolve, 10);
      });

    const work = (): Promise<string> => {

      if (!cancelation.live) {
        return Promise.resolve(infiniCell.value);
      }

      return pwgen();
    };

    const complete = (word: string): string => {

      if (!cancelation.live) {
        return infiniCell.value;
      }

      infiniCell.value = word;
      infiniCell.ready = true;

      delete infiniCell.promise;
      delete infiniCell.cancel;

      return word;
    };

    infiniCell.promise = 
      limit(spark)
        .then(work)
        .then(complete);

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

  return ({
    generator,
    options: current,
    update,
  });
}
