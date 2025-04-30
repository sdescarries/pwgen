// DOMException [QuotaExceededError]: The requested length exceeds 65,536 bytes
const MaxEntries = 0x4000 as const;

export class Random {
  #array = new Uint32Array(MaxEntries);
  #index: number = MaxEntries;
  #range?: number;
  #previous?: number;

  constructor(range?: number) {
    if (crypto?.getRandomValues == null) {
      throw new Error('Random: missing crypto facility');
    }
    this.#range = range;
  }

  pop(range?: number): number {
    range = range ?? this.#range ?? MaxEntries;
    if (range < 3) {
      throw new Error(`Random: invalid range ${range}`);
    }

    for (let n = 0; n < range; n++) {
      if (this.#index >= MaxEntries) {
        crypto.getRandomValues(this.#array);
        this.#index = 0;
      }

      const candidate = this.#array[this.#index++] % range;
      if (this.#previous !== candidate) {
        this.#previous = candidate;
        return candidate;
      }
    }
    throw new Error(`Random: failed getting unique value in ${range} iterations`);
  }

  select<T>(sample: T[]): T {
    const index = this.pop(sample.length);
    return sample.at(index)!;
  }
}
