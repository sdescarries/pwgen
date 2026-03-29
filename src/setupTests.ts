import '@/mocks/IntersectionObserver';
import '@/mocks/ResizeObserver';
import '@/mocks/crypto';
import '@testing-library/jest-dom/jest-globals';
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, mock } from "bun:test";

// FIXME pas sur
export const pLimit = mock(() => () => (cb: () => void) => cb());
expect.extend(matchers);