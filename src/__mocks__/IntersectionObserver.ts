
const disconnect = jest.fn();
const observe = jest.fn();
const unobserve = jest.fn();

const IntersectionObserver = jest.fn(() => ({
  disconnect,
  observe,
  unobserve,
}));

const getRandomValues = jest.fn();

const crypto = {
  getRandomValues,
};

Object.assign(global, { IntersectionObserver, crypto });
