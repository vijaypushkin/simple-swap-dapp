import React from 'react';

const TOKEN_LIST = ['USDC', 'USDT', 'DAI', 'WETH', 'WBTC', 'UNI', 'LINK'];

interface ITokenSelectorProps {
  onSelectToken: (token: string) => void;
}
const TokenSelector: React.FC<ITokenSelectorProps> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl mb-2">Select a Token</h1>

      {TOKEN_LIST.map((token) => (
        <button
          key={token}
          className="my-1"
          onClick={() => props.onSelectToken(token)}
          data-testid={`${token}-button`}
        >
          {token}
        </button>
      ))}
    </div>
  );
};

export default TokenSelector;
