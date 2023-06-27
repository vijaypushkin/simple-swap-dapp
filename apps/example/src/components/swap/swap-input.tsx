import React from 'react';
import { ModalTrigger } from 'pushkin-simple-modals-01';

import TokenSelector from '../modals/token-selector.tsx';

interface ISwapInputProps {
  label: 'first' | 'second';
  inverse: boolean;
  secondTokenName: string;
  firstToken: string;
  secondToken: string;
  balance: string | null;
  handleFirstTokenChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecondTokenChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleTokenChange: (tokenName: string) => void;
}

const SwapInput: React.FC<ISwapInputProps> = ({
  label,
  inverse,
  secondTokenName,
  firstToken,
  secondToken,
  balance,
  handleFirstTokenChange,
  handleSecondTokenChange,
  handleTokenChange,
}) => {
  const currentPos = inverse ? (label === 'first' ? 'second' : 'first') : label;

  const value = currentPos === 'first' ? firstToken : secondToken;
  const onChange =
    currentPos === 'first' ? handleFirstTokenChange : handleSecondTokenChange;
  const tokenName = currentPos === 'first' ? 'MATIC' : secondTokenName;

  const valueInUSD = isNaN(parseFloat(value)) ? 0 : parseFloat(value) * 0.75;

  return (
    <div
      className="flex flex-col border border-gray-800 rounded-xl p-4 gap-2 bg-gray-800"
      data-testid={`${label}-${currentPos}`}
    >
      <div className="flex flex-row">
        <input
          className="grow text-lg md:text-2xl bg-transparent"
          type="text"
          pattern="^[0-9]*[.,]?[0-9]*$"
          value={value}
          onChange={onChange}
          data-testid={`${currentPos}-input`}
        />

        {currentPos === 'second' ? (
          <ModalTrigger
            modalName={'token-modal'}
            trigger={tokenName}
            triggerClassName={'px-2 py-1 rounded-xl bg-gray-500'}
            modalContent={<TokenSelector onSelectToken={handleTokenChange} />}
            modalClassName="w-56"
          />
        ) : (
          <div className="px-2 py-1">{tokenName}</div>
        )}
      </div>

      <div className="flex justify-between">
        <div className="text-xs">${valueInUSD}</div>

        {currentPos === 'first' && balance != null && (
          <div className="text-xs">{balance} MATIC</div>
        )}
      </div>
    </div>
  );
};

export default SwapInput;
