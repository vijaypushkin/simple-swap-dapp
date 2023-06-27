import { createContext } from 'react';
import useWallet from '../hooks/use-wallet.ts';

interface IWalletContext {
  account: string | null;
  balance: string | null;
  error: string | null;
  validNetwork: boolean;
  handleConnectWallet: null | (() => void);
  handleDisconnectWallet: null | (() => void);
}

interface IWalletContextProps {
  children: React.ReactNode;
}

const WalletContext = createContext<IWalletContext>({
  account: null,
  balance: null,
  error: null,
  validNetwork: false,
  handleConnectWallet: null,
  handleDisconnectWallet: null,
});

const WalletProvider: React.FC<IWalletContextProps> = ({ children }) => {
  const {
    account,
    balance,
    error,
    validNetwork,
    handleConnectWallet,
    handleDisconnectWallet,
  } = useWallet();

  return (
    <WalletContext.Provider
      value={{
        account,
        balance,
        error,
        validNetwork,
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
