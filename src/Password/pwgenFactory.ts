import { getCharset } from './charset';
import { pwgenImpl } from './pwgenImpl';
import { Random } from './Random';
import { WordGenerator } from './types';

export const pwgenFactory =
  (length: number, ...args: string[]): WordGenerator =>
    (): Promise<string> =>
      Promise
        .resolve({
          dict: getCharset(...args),
          length,
          random: new Random(),
        })
        .then(pwgenImpl);
