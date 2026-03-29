import { mock } from 'bun:test';

export const disconnect = mock();
export const observe = mock();
export const unobserve = mock();

export const ResizeObserverMock = mock(() => ({
  disconnect,
  observe,
  unobserve,
}));

Object.assign(global, { ResizeObserver: ResizeObserverMock });
