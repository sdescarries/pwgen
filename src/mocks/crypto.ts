
import { mock } from 'bun:test';

export const getRandomValues = mock();

export const cryptoMock = {
  getRandomValues,
};

Object.assign(global, { crypto: cryptoMock });
