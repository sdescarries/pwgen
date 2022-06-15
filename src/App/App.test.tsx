import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { charsetLabels } from '@/Password/';

import { App } from './App';

describe('App', () => {

  for (const [key, label] of Object.entries(charsetLabels)) {
    it(`should have dipSwith for ${key}:${label}`, () => {
      // arrange
      render(<App />);

      // act
      const dipSwitch = screen.getByTestId(`dipSwitch-${key}`);

      // assert
      expect(dipSwitch).toHaveTextContent(label);
    });
  }
});
