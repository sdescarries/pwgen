//import pLimit from 'p-limit';

import { getCharset } from './charset';
import { pwgenImpl } from './pwgenImpl';
import { Random } from './Random';

export type pwgen = () => Promise<string>;

/*
const limit = pLimit(1);

const sleep = 
  (timeout?: number) => 
    (args: PwgenProps): Promise<PwgenProps> => 
      new Promise(resolve => 
        setTimeout(resolve, timeout))
        .then(() => args);
*/
export function pwgenFactory(length: number, ...args: string[]): pwgen {

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