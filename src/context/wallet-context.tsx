import { createContext } from 'react';
import useWallet from '../hooks/use-wallet.ts';

interface IWalletContext {
  account: string | null;
  balance: string | null;
  error: string | null;
  handleConnectWallet: () => void;
  handleDisconnectWallet: () => void;
}

interface IWalletContextProps {
  children: React.ReactNode;
}

const WalletContext = createContext<IWalletContext>({
  account: null,
  balance: null,
  error: null,
  handleConnectWallet: () => {
    // noop
  },
  handleDisconnectWallet: () => {
    // noop
  },
});

const WalletProvider: React.FC<IWalletContextProps> = ({ children }) => {
  const {
    account,
    balance,
    error,
    handleConnectWallet,
    handleDisconnectWallet,
  } = useWallet();

  return (
    <WalletContext.Provider
      value={{
        account,
        balance,
        error,
        handleConnectWallet,
        handleDisconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export { WalletContext };
export default WalletProvider;
