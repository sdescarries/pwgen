import { initPredictable, setPredictable } from '@/mocks/predictableValues';

import { pwgenFactory } from './pwgenFactory';


describe('pwgenFactory', () => {

  beforeEach(initPredictable);

  it('creates a function', () => {
    expect(pwgenFactory(5, 'foo', 'bar')).toBeInstanceOf(Function);
  });

  it('resolves into a random password', async () => {
    const pwgen = pwgenFactory(1, 'abc');
    setPredictable(0);
    await expect(pwgen()).resolves.toStrictEqual('a');
  });

});