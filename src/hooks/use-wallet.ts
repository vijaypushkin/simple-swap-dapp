import { useEffect, useState } from 'react';

const useWallet = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    setError(null);

    if (!window.ethereum) {
      setError('Metamask not found');
      return;
    }

    const accounts = await window.ethereum.request<string[]>({
      method: 'eth_requestAccounts',
    });

    console.log(accounts);

    if (accounts && accounts.length) {
      setAccount(accounts[0] ?? null);
    }
  };

  const handleDisconnectWallet = async () => {
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

  return {
    account,
    balance,
    error,
    handleConnectWallet,
    handleDisconnectWallet,
  };
};

export default useWallet;
