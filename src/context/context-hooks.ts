import { useContext } from 'react';
import { WalletContext } from './wallet-context.tsx';
import { ModalContext } from './modal-context.tsx';

export const useWalletContext = () => {
  const context = useContext(WalletContext);

  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }

  return context;
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return context;
};
