import { beforeAll, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AccountModal from './account-modal.tsx';
import WalletProvider from '../../context/wallet-context.tsx';
import {
  DEAD_ADDRESS,
  walletBeforeAllOps,
} from '../../tests/common-test-methods.ts';

beforeAll(walletBeforeAllOps);

describe('Account Modal', () => {
  it('should connect to wallet', async () => {
    render(
      <WalletProvider>
        <AccountModal />
      </WalletProvider>,
    );

    await userEvent.click(
      screen.getByRole('button', { name: /connect wallet/i }),
    );

    expect(screen.getByText(DEAD_ADDRESS)).toBeInTheDocument();
  });

  it('should show wallet balance', async () => {
    render(
      <WalletProvider>
        <AccountModal />
      </WalletProvider>,
    );

    await userEvent.click(
      screen.getByRole('button', { name: /connect wallet/i }),
    );

    expect(screen.getByTestId('balance')).toBeInTheDocument();
  });
});
