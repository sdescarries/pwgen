export class Random {
  array = new Uint32Array(1024);
  index = 1024;
  range: number;

  constructor(range: number) {
    this.range = range;
  }

  pop(): number {
    if (this.index >= 1024) {
      crypto.getRandomValues(this.array);
      this.index = 0;
    }
    return this.array[this.index++] % this.range;
  }
}
