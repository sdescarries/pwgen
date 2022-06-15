import '@testing-library/jest-dom/extend-expect';
import '@/__mocks__/IntersectionObserver';
import '@/__mocks__/ResizeObserver';
import '@/__mocks__/crypto';

import { jest } from '@jest/globals';

jest.mock('p-limit', () => () => (cb: () => void) => cb());
