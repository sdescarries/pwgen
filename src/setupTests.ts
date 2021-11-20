// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@/__mocks__/IntersectionObserver';
import '@/__mocks__/ResizeObserver';
import '@/__mocks__/crypto';

jest.mock('p-limit', () => () => (cb: () => void) => cb());