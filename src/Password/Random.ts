export class Random {
  // Maximum amount of bytes is 0x10000
  array = new Uint32Array(0x4000);
  index = 1024;
  range: number;

  constructor(range?: number) {
    this.range = range ?? 0xFFFFFFFF;
  }

  pop(): number {
    if (this.index >= 0x4000) {
      crypto.getRandomValues(this.array);
      this.index = 0;
    }
    return this.array[this.index++] % this.range;
  }
}

export function benchmark() {
  const beg = performance.now();
  for (let n = 0; n < 0x10000; n++) {
    new Random();
  }
  const end = performance.now() - beg;
  const rat = 0x10000 * 0x10000 / end;

  console.debug({ end, rat });
}
