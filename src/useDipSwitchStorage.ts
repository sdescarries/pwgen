import { Dispatch, useEffect, useState } from 'react';

import { CharsetState } from '@/charset';

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
  } catch ({ message }) {
    console.warn(message);
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => update({ [charset]: checked }), []);

  const chainUpdate = (newState: boolean) => {
    update({ [charset]: newState });
    setChecked(newState);
    void saveDipSwitchStorage(charset, newState);
  };

  const toggle = () => chainUpdate(!checked);

  return [checked, toggle];
}
