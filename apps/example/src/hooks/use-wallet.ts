import { useEffect, useState } from 'react';

const useWallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validNetwork, setValidNetwork] = useState<boolean>(false);

  const handleConnectWallet = async () => {
    setError(null);

    if (!window.ethereum) {
      setError('Metamask not found');
      return;
    }

    const accounts = await window.ethereum.request<string[]>({
      method: 'eth_requestAccounts',
    });

    if (accounts && accounts.length) {
      setAccount(accounts[0] ?? null);
    }
  };

  const handleDisconnectWallet = async () => {
    setError(null);

    if (!window.ethereum) {
      setError('Metamask not found');
      return;
    }

    localStorage.removeItem('provider');

    window.location.reload();
  };

  useEffect(() => {
    const getBalance = async () => {
      if (!window.ethereum) {
        setError('Metamask not found');
        return;
      }

      if (!account) {
        return;
      }

      const balance = await window.ethereum.request<number>({
        method: 'eth_getBalance',
        params: [account, 'latest'],
      });

      if (balance) {
        const balanceInEth = balance / 10 ** 18;
        setBalance(balanceInEth.toString());
      }
    };

    if (account != null && account !== '') {
      getBalance();
    }
  }, [account]);

  // ? reset error after 5 seconds
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  }, [error]);

  const checkNetwork = async () => {
    if (!window.ethereum) {
      setError('Metamask not found');
      return;
    }

    window.ethereum.on('chainChanged', () => window.location.reload());

    const chainId = await window.ethereum.request<number>({
      method: 'eth_chainId',
    });

    const chainIdInDecimal = parseInt(chainId?.toString() ?? '0', 16);

    console.log(chainIdInDecimal, chainIdInDecimal === 137);
    if (chainIdInDecimal === 137) {
      setValidNetwork(true);
    } else {
      setValidNetwork(false);
      setError('Please connect to Polygon network');
    }
  };

  useEffect(() => {
    checkNetwork();
  }, []);

  return {
    account,
    balance,
    error,
    validNetwork,
    handleConnectWallet,
    handleDisconnectWallet,
  };
};

export default useWallet;
