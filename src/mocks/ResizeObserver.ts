import { jest } from '@jest/globals';

export const disconnect = jest.fn();
export const observe = jest.fn();
export const unobserve = jest.fn();

export const ResizeObserverMock = jest.fn(() => ({
  disconnect,
  observe,
  unobserve,
}));

Object.assign(global, { ResizeObserver: ResizeObserverMock });
