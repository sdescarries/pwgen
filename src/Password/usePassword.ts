import pLimit from 'p-limit';
import { useEffect, useState } from 'react';

import { pwgen } from './pwgenFactory';

const limit = pLimit(1);
const sleep = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

interface PasswordProps {
  seed: number,
  generator?: pwgen,
}

export function usePassword({ generator, seed }: PasswordProps): string {
  const [value, set] = useState<string>('');

  useEffect(() => {

    if (generator == null) {
      return;
    }

    let live = true;
    const setIfAlive = (pw: string) => {
      if (live) {
        set(pw);
      }
    };

    set('');
    limit(() => Promise
      .resolve(50)
      .then(sleep)
      .then(generator)
      .then(setIfAlive))
      .catch(console.warn);

    return () => {
      live = false;
      limit.clearQueue();
    };

  }, [generator, seed]);

  return value;
}
