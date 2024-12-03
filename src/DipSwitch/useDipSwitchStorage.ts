import { Dispatch, useEffect, useState } from 'react';

import { CharsetState } from '@/Password/';

export type UpdateCharsetState = (state: CharsetState) => void;
export interface DipSwitchProps {
  charset: string;
  update: UpdateCharsetState;
}

export const charsetStoragePath = (charset: string): string =>
  `pwgen-charset-${charset}`;


export function loadDipSwitchStorage(charset: string): boolean {
  try {
    const serialized = localStorage.getItem(charsetStoragePath(charset)) ?? 'false';
    return JSON.parse(serialized) as boolean;
  } catch (error) {
    if (error instanceof Error) {
      console.warn(error.message);
    }
    return false;
  }
}

export const saveDipSwitchStorage = (charset: string, value: boolean): Promise<void> =>
  Promise
    .resolve()
    .then(() => charsetStoragePath(charset))
    .then((path) => localStorage.setItem(path, JSON.stringify(value)))
    .catch(() => undefined);

export function useDipSwitchStorage({ charset, update }: DipSwitchProps): [boolean, Dispatch<boolean>] {

  const [checked, setChecked] = useState<boolean>(() => loadDipSwitchStorage(charset));

  useEffect(() => update({ [charset]: checked }), []);

  const chainUpdate = (newState: boolean) => {
    update({ [charset]: newState });
    setChecked(newState);
    void saveDipSwitchStorage(charset, newState);
  };

  const toggle = () => chainUpdate(!checked);

  return [checked, toggle];
}
