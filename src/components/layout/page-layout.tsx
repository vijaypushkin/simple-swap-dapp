import React from 'react';
import Account from '../wallet/account.tsx';
import AccountModalBody from '../modals/account-modal.tsx';

interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="flex-none bg-blue-900">
        <nav className="flex gap-4 justify-between items-center p-4">
          <h1 className="text-2xl">Simple Swap DAPP</h1>

          <Account>
            <AccountModalBody />
          </Account>
        </nav>
      </header>

      <main className="flex-grow py-8 text-white">{children}</main>
    </div>
  );
};

export default PageLayout;
