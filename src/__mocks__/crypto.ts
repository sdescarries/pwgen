
import { jest } from '@jest/globals';

export const getRandomValues = jest.fn();

export const cryptoMock = {
  getRandomValues,
};

Object.assign(global, { crypto: cryptoMock });
