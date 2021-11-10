// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

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
