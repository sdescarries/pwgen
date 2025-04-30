import { initPredictable, setPredictable } from '@/mocks/predictableValues';

import { Random } from './Random';

describe('Random', () => {

  beforeEach(initPredictable);
  it('creates an instance', () => {
    expect(() => new Random()).not.toThrow();
    expect(() => new Random(0)).not.toThrow();
    expect(new Random(3)).toBeInstanceOf(Random);
  });

  it('returns different values', () => {
    setPredictable(1, 1, 2);
    const random = new Random(3);
    expect(random.pop()).toStrictEqual(1);
    expect(random.pop()).toStrictEqual(2);
  });

  it('selects an entry from array', () => {
    const random = new Random();
    expect(random.select(['a', 'b', 'c'])).toStrictEqual('a');
  });

  it('refuses unsafe value', () => {
    expect(() => new Random().pop(2)).toThrow(/invalid range/);
    expect(() => new Random(2).pop()).toThrow(/invalid range/);
  });

  it('refuses same consecutive values', () => {
    const random = new Random();
    expect(() => random.pop()).not.toThrow();
    expect(() => random.pop()).toThrow(/failed getting unique value/);
  });

  it('refuses if crypto module not available', () => {
    Object.assign(crypto, { getRandomValues: undefined });
    expect(() => new Random()).toThrow(/missing crypto facility/);
  });
});