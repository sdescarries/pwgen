import type { Random } from './Random';

interface Props {
  length: number;
  random: Random;
  dict: string[];
  separator?: string;
}

export function pwgenImpl({ length, dict, random, separator }: Props): string {
  const output: string[] = [];
  const range = dict.length;
  for (let n = 0; n < length; ++n) {
    output[n] = dict[random.pop(range)];
  }
  return output.join(separator ?? '');
}