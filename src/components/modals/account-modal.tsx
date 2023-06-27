import React from 'react';

import { useWalletContext } from '../../context/context-hooks.ts';
import { truncateAddress } from '../../utils/wallet-utils.ts';

const AccountModalBody: React.FC = () => {
  const {
    account,
    balance,
    handleConnectWallet,
    handleDisconnectWallet,
    error,
  } = useWalletContext();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">Account</h2>

      {account ? (
        <div className="flex flex-col gap-2 overflow-hidden">
          <div className="md:hidden">{truncateAddress(account)}</div>

          <div className="hidden md:block" data-testid="account">
            {account}
          </div>

          {balance && (
            <div className="text-sm text-gray-400">
              <span data-testid="balance">{balance}</span> <span>MATIC</span>
            </div>
          )}

          <button
            className="btn-primary"
            onClick={handleDisconnectWallet}
            disabled={error != null}
          >
            {error ?? 'Disconnect Wallet'}
          </button>
        </div>
      ) : (
        <button
          className="btn-primary"
          onClick={handleConnectWallet}
          disabled={error != null}
        >
          {error ?? 'Connect Wallet'}
        </button>
      )}
    </div>
  );
};

export default AccountModalBody;
