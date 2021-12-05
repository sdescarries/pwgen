import { getCharset } from './charset';
import { pwgenImpl } from './pwgenImpl';
import { Random } from './Random';
import { WordGenerator } from './types';


export function pwgenFactory(length: number, ...args: string[]): WordGenerator {

  if (length === 0) {
    return (): Promise<string> => Promise.resolve('');
  }

  if (length < 4) {
    throw new Error(`length too short ${length}`);
  }

  const charset = getCharset(...args);

  if (charset.length < 1) {
    throw new Error('empty charset');
  }

  if (crypto?.getRandomValues == null) {
    throw new Error('missing crypto facility');
  }

  const random = new Random(charset.length);

  return (): Promise<string> =>
    Promise.resolve({ length, charset, random }).then(pwgenImpl);
}