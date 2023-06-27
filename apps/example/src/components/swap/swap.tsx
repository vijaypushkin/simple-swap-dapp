import React, { useMemo, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import clsx from 'clsx';
import { useModalContext } from 'pushkin-simple-modals-01';

import { useWalletContext } from '../../context/context-hooks.ts';
import SwapInput from './swap-input.tsx';

const RATIO = 0.9975;

const Swap: React.FC = () => {
  const { account, balance, handleConnectWallet, validNetwork } =
    useWalletContext();
  const { closeModal } = useModalContext();

  const [firstToken, setFirstToken] = useState('');
  const [secondToken, setSecondToken] = useState('');
  const [secondTokenName, setSecondTokenName] = useState('USDC');

  const [inverse, setInverse] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFirstTokenChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    // ? empty input
    if (ev.target.value === '') {
      setSecondToken('');
      setFirstToken('');
      return void 0;
    }

    // ? not a number
    if (isNaN(parseFloat(ev.target.value))) return void 0;

    setFirstToken(ev.target.value);
    setSecondToken((parseFloat(ev.target.value) * RATIO).toString());
  };

  const handleSecondTokenChange = (
    ev: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    // ? empty input
    if (ev.target.value === '') {
      setSecondToken('');
      setFirstToken('');
      return void 0;
    }

    // ? not a number
    if (isNaN(parseFloat(ev.target.value))) return void 0;

    setSecondToken(ev.target.value);
    setFirstToken((parseFloat(ev.target.value) / RATIO).toString());
  };

  const handleSwap = () => {
    if (!validNetwork) {
      alert('Please connect to the Polygon network');
      return void 0;
    }

    if (!account) {
      handleConnectWallet?.();
      return void 0;
    }

    setLoading(true);
    setTimeout(() => {
      alert('Swap successful!');
      setLoading(false);
    }, 3000);
  };

  const handleTokenChange = (token: string) => {
    setSecondTokenName(token);
    closeModal();
  };

  const renderToken = (label: 'first' | 'second') => (
    <SwapInput
      label={label}
      inverse={inverse}
      firstToken={firstToken}
      secondToken={secondToken}
      balance={balance}
      secondTokenName={secondTokenName}
      handleFirstTokenChange={handleFirstTokenChange}
      handleSecondTokenChange={handleSecondTokenChange}
      handleTokenChange={handleTokenChange}
    />
  );

  const button = useMemo(() => {
    if (!validNetwork) return { text: 'Unsupported Network', disabled: true };

    if (!account) return { text: 'Connect Wallet', disabled: false };

    if (loading) return { text: <ClipLoader />, disabled: true };

    return { text: 'Swap', disabled: false };
  }, [account, loading, validNetwork]);

  return (
    <div className="flex flex-col gap-2 md:border border-gray-700 rounded-xl mx-auto max-w-lg p-4 m-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Swap</h1>

        <div className="text-xs flex items-center gap-1">
          <div
            className={clsx('w-1 h-1 rounded-full', {
              'bg-red-500': !validNetwork,
              'bg-green-500': validNetwork,
            })}
          />
          {validNetwork ? 'Polygon Mainnet' : 'Unsupported Network'}
        </div>
      </div>

      {renderToken('first')}

      <button
        className="-my-4 border p-2 mx-auto rounded-xl active:scale-[99%] bg-gray-900 z-10 border-gray-800"
        onClick={() => setInverse((s) => !s)}
        data-testid="swap-input-button"
      >
        ⇕
      </button>

      {renderToken('second')}

      <button
        className={clsx('btn-primary h-12 mt-2', { 'bg-gray-500': loading })}
        onClick={handleSwap}
        disabled={button.disabled}
      >
        {button.text}
      </button>
    </div>
  );
};

export default Swap;
