import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect,it } from 'bun:test';

import { charsetLabels } from '@/Password/';

import { App } from './App';

describe('App', () => {

  for (const [key, label] of Object.entries(charsetLabels)) {
    it(`should have dipSwitch for ${key}:${label}`, () => {
      // arrange
      render(<App />);

      // act
      const dipSwitch = screen.getByTestId(`dipSwitch-${key}`);

      // assert
      expect(dipSwitch).toHaveTextContent(label);
    });
  }
});
