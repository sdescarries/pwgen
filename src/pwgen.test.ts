import { getCharset } from '@/charset';

describe('pwgen', () => {
  describe('getCharset', () => {
    it('combines given arguments into unique entries', () => {
      const result = getCharset('foo', 'bar', 'baz', 'zaz');
      expect(result).toStrictEqual(['f', 'o', 'b', 'a', 'r', 'z']);
    });
  });
});
