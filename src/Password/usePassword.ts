import { useEffect, useState } from 'react';

import { pwgen } from './pwgenFactory';

export function usePassword(generator?: pwgen): string {
  const [value, set] = useState<string>('');

  useEffect(() => {
    let live = true;

    const unmount = () => {
      live = false;
    };

    if (generator == null) {
      return;
    }

    const setIfAlive = (pw: string) => {
      if (!live) {
        return;
      }
      set(pw);
    };

    Promise
      .resolve()
      .then(generator)
      .then(setIfAlive)
      .catch(console.warn);

    if (value) {
      set('');
    }

    return unmount;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generator]);

  return value;
}
