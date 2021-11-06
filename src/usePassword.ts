import { useEffect, useState } from 'react';

import { pwgen } from './pwgenFactory';

export function usePassword(generator?: pwgen): string {
  const [value, set] = useState<string>('');

  useEffect(() => {
    let alive = true;

    if (generator == null) {
      return;
    }

    const setIfAlive = (pw: string) => {
      if (!alive) {
        return;
      }
      set(pw);
    };

    generator()
      .then(setIfAlive)
      .catch(console.warn);

    return () => {
      alive = false;
    };
  }, [generator]);

  return value;
}
