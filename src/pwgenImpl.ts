import type { Random } from './Random';

export interface PwgenProps {
  length: number;
  charset: string[];
  random: Random;
}

export function pwgenImpl({ length, charset, random }: PwgenProps): string {
  // Output word
  let word = '';
  let prev = -1;

  // Add random chars form set for desired length
  for (let n = 0; n < length; ++n) {
    let key;

    // Prevent consecutive chars from being the same
    do {
      key = random.pop();
    } while (key === prev);

    prev = key;
    word += charset[key];
  }

  return word;
}
