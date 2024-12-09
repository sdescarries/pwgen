
const predictable: {
  values: number[],
} = {
  values: [],
};

function getPredictableValues<T extends ArrayBufferView | null>(buffer: T): T {
  if (buffer instanceof Uint32Array) {
    const array = buffer as Uint32Array;
    const range = predictable.values.length;
    for (let n = 0; n < array.length; n++) {
      array[n] = predictable.values[n % range];
    }
  }
  return buffer;
}

export function setPredictable(...values: number[]) {
  predictable.values = [...values];
}

export function initPredictable() {
  crypto.getRandomValues = getPredictableValues;
  setPredictable(0);
}
