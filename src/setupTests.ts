import '@testing-library/jest-dom/jest-globals';
import '@/mocks/IntersectionObserver';
import '@/mocks/ResizeObserver';

import { jest } from '@jest/globals';

jest.mock('p-limit', () => () => (cb: () => void) => cb());
