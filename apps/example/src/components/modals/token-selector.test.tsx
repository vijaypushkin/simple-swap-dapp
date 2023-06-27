import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import TokenSelector from './token-selector.tsx';

describe('TokenSelector', () => {
  it('should render', () => {
    render(<TokenSelector onSelectToken={() => void 0} />);

    expect(
      screen.getByRole('heading', { name: /select a token/i }),
    ).toBeInTheDocument();
  });
});
