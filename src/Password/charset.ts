import { CharsetLabels } from './types';

export const charsetLabels: CharsetLabels = {
  ['09']: 'Number',
  ['AZ']: 'Upper Case',
  ['SM']: 'Symbol',
};

export const charsetShorts: CharsetLabels = {
  ['09']: '9',
  ['AZ']: 'Z',
  ['SM']: '#',
};

export const alphaLower = 'abcdefghijklmnopqrstuvwxyz';
export const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const numerical = '0123456789';
export const symbol = '=+-*@$%!&?,.:;^#(){}[]|';

export const charsetMapping: CharsetLabels = {
  ['09']: numerical,
  ['AZ']: alphaUpper,
  ['SM']: symbol,
  ['az']: alphaLower,
};

export const toRealSet = ([key, value]: [string, boolean]): string => 
  (value ? charsetMapping[key] : '');

export const getCharset = (...args: string[]): string[] =>
  Array.from(new Set(args.flat().join('')));
