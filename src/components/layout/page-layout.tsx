import React, { useContext } from 'react';

import AccountModalBody from '../modals/account-modal.tsx';
import ModalTrigger from '../modals/modal-trigger.tsx';
import { truncateAddress } from '../../utils/wallet-utils.ts';
import { WalletContext } from '../../context/wallet-context.tsx';

interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  const { account } = useContext(WalletContext);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="flex-none bg-blue-900">
        <nav className="flex gap-4 justify-between items-center p-4">
          <h1 className="text-2xl" data-testid="main-heading">
            Simple Swap DAPP
          </h1>

          <ModalTrigger
            modalName={'account-modal'}
            trigger={account ? truncateAddress(account) : 'Connect Wallet'}
            modalContent={<AccountModalBody />}
            modalClassName="md:max-w-lg"
          />
        </nav>
      </header>

      <main className="flex-grow py-8 text-white">{children}</main>
    </div>
  );
};

export default PageLayout;
