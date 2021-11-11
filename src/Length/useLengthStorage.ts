import { useEffect, useState } from 'react';

type UpdateLength = (length: number) => void;

export interface LengthProps {
  update: UpdateLength;
}

export const lengthStoragePath = 'pwgen-length';


export function loadLengthStorage(): number {
  try {
    const serialized = localStorage.getItem(lengthStoragePath) ?? '8';
    return JSON.parse(serialized) as number;
  } catch ({ message }) {
    console.warn(message);
    return 8;
  }
}

export const saveLengthStorage = (value: number): Promise<void> => 
  Promise
    .resolve()
    .then(() => localStorage.setItem(lengthStoragePath, JSON.stringify(value)))
    .catch(() => undefined);

interface LengthMap {
  [key: number]: number;
}

const lengthMap: LengthMap = {
  8: 12,
  12: 16,
  16: 24,
  24: 32,
  32: 8,
};

export type Toggle = () => void;

export function useLengthStorage({ update }: LengthProps): [number, Toggle] {

  const [length, setValue] = useState<number>(loadLengthStorage);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => update(length), []);

  const chainUpdate = (newState: number) => {
    update(newState);
    setValue(newState);
    void saveLengthStorage(newState);
  };

  const toggle = () => chainUpdate(lengthMap[length] ?? 8);

  return [length, toggle];
}
