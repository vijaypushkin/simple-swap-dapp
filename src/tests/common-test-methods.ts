export const DEAD_ADDRESS = '0x000000000000000000000000000000000000dEaD';
export const WALLET_BALANCE = '0x23c5155ab92effd6';

export const walletBeforeAllOps = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - mock ethereum, no need to implement all methods
  window.ethereum = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    request: (args) => {
      if (args.method === 'eth_requestAccounts') {
        return Promise.resolve([DEAD_ADDRESS]);
      }

      if (args.method === 'eth_getBalance') {
        return Promise.resolve(WALLET_BALANCE);
      }

      return Promise.resolve();
    },
  };
};
