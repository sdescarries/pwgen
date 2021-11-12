import pLimit from 'p-limit';
import { useEffect, useState } from 'react';

import { pwgen } from './pwgenFactory';

const limit = pLimit(1);
const throttle = 
  (timeout?: number) => (): Promise<void> => 
    limit(() => new Promise(resolve => 
      setTimeout(resolve, timeout)));

export function usePassword(generator?: pwgen): string {
  const [value, set] = useState<string>('');

  useEffect(() => {
    let alive = true;

    const kill = () => {
      alive = false;
    };

    if (generator == null) {
      return;
    }

    const setIfAlive = (pw: string) => {
      if (!alive) {
        return;
      }
      set(pw);
    };

    Promise
      .resolve()
    //      .then(throttle(25))
      .then(generator)
      .then(setIfAlive)
      .catch(console.warn);

    if (value) {
      set('');
    }

    return kill;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generator]);

  return value;
}
