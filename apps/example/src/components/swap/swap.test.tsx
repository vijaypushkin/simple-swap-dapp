import { beforeAll, beforeEach, describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Swap from './swap.tsx';
import WalletProvider from '../../context/wallet-context.tsx';
import userEvent from '@testing-library/user-event';
import { walletBeforeAllOps } from '../../tests/common-test-methods.ts';

beforeAll(walletBeforeAllOps);

describe('Swap', () => {
  it('should render', () => {
    render(<Swap />);

    expect(screen.getByRole('heading', { name: /swap/i })).toBeInTheDocument();
  });

  it('should render connect wallet when wallet is not connected', () => {
    render(
      <WalletProvider>
        <Swap />
      </WalletProvider>,
    );

    expect(
      screen.getByRole('button', { name: /connect wallet/i }),
    ).toBeInTheDocument();
  });

  describe('Swap - Wallet Connected', () => {
    beforeEach(async () => {
      render(
        <WalletProvider>
          <Swap />
        </WalletProvider>,
      );

      await userEvent.click(
        screen.getByRole('button', { name: /connect wallet/i }),
      );
    });

    it('should render swap button when wallet is connected', async () => {
      expect(screen.getByRole('button', { name: /swap/i })).toBeInTheDocument();
    });

    it('should swap token inputs', async () => {
      await userEvent.click(screen.getByTestId('swap-input-button'));

      expect(screen.getByTestId('first-second')).toBeInTheDocument();
    });

    it('should change second token from USDC to USDT', async () => {
      await userEvent.click(screen.getByTestId('token-modal-trigger'));

      await userEvent.click(screen.getByTestId('USDT-button'));

      expect(screen.getByTestId('token-modal-trigger')).toHaveTextContent(
        'USDT',
      );
    });

    it('should swap tokens - 3.5s delay', async () => {
      const spy = vi.spyOn(window, 'alert');

      const delay = (d: number) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(1);
          }, d);
        });
      };

      screen.debug();
      await userEvent.type(screen.getByTestId('first-input'), '1');

      await userEvent.click(screen.getByRole('button', { name: /swap/i }));

      await delay(3500);

      expect(spy).toHaveBeenCalledOnce();
    });
  });
});
