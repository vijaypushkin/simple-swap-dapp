import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    // check if App components renders headline
    expect(screen.getByTestId('main-heading')).toHaveTextContent(
      'Simple Swap DAPP',
    );
  });
});
