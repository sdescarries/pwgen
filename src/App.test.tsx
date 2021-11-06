import { render, screen } from '@testing-library/react';

import { App } from '@/App';

import { charsetLabels } from './charset';

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
