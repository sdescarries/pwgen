import { useRef, useState } from 'react';

import { 
  alphaLower, 
  toRealSet,
} from './charset';
import { pwgenFactory } from './pwgenFactory';
import { 
  PasswordOptions, 
  PasswordUserOptions, 
  UpdatePasswordOptions, 
  WordGenerator,
} from './types';
import { useDebounce } from './useDebounce';

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

export function usePasswordGenerator({ length, charset }: PasswordOptions): WordGenerator {
  const realSets = Object.entries<boolean>(charset).map(toRealSet);
  return pwgenFactory(length, alphaLower, ...realSets);
}

interface PasswordContext extends PasswordOptions {
  generator: WordGenerator;
  update: UpdatePasswordOptions;
}

export function usePasswordContext(): PasswordContext {
  const pending = useRef<PasswordOptions>({ charset: {}, length: 0 });
  const [current, setOptions] = useState<PasswordOptions>(pending.current);
  const debounce = useDebounce(200);
  const generator = usePasswordGenerator(current);

  const update: UpdatePasswordOptions = (options: PasswordUserOptions) => {
    pending.current = combinePasswordOptions(pending.current, options);
    debounce(() => {
      if (!deepEqual(current, pending.current)) {
        setOptions(pending.current);
      }
    });
  };

  return ({
    ...current,
    generator,
    update,
  });
}
