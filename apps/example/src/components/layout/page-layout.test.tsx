import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import userEvent from '@testing-library/user-event';

import PageLayout from './page-layout.tsx';

describe('PageLayout', () => {
  it('renders headline', () => {
    render(
      <PageLayout>
        <div>Dummy Content</div>
      </PageLayout>,
    );

    // check if App components renders headline
    expect(screen.getByTestId('main-heading')).toHaveTextContent(
      'Simple Swap DAPP',
    );
  });

  it('renders connect wallet button', () => {
    render(
      <PageLayout>
        <div>Dummy Content</div>
      </PageLayout>,
    );

    // check if App components renders headline
    expect(
      screen.getByRole('button', { name: /connect wallet/i }),
    ).toHaveTextContent('Connect Wallet');
  });

  it('opens account dialog', async () => {
    render(
      <PageLayout>
        <div>Dummy Content</div>
      </PageLayout>,
    );

    await userEvent.click(
      screen.getByRole('button', { name: /connect wallet/i }),
    );

    // check if App components renders headline
    expect(screen.getByTestId('account-modal')).toBeInTheDocument();
  });
});
