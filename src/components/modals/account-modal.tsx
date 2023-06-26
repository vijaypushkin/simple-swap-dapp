import React from 'react';

import { useWalletContext } from '../../context/context-hooks.ts';
import { truncateAddress } from '../../utils/wallet-utils.ts';

const AccountModalBody: React.FC = () => {
  const { account, handleConnectWallet, handleDisconnectWallet } =
    useWalletContext();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">Account</h2>

      {account ? (
        <div className="flex flex-col gap-2 overflow-hidden">
          <div className="md:hidden">{truncateAddress(account)}</div>

          <div className="hidden md:block">{account}</div>

          <button className="btn-primary" onClick={handleDisconnectWallet}>
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <button className="btn-primary" onClick={handleConnectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default AccountModalBody;
