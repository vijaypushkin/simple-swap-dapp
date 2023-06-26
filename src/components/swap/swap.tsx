import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import clsx from 'clsx';

import {
  useModalContext,
  useWalletContext,
} from '../../context/context-hooks.ts';
import TokenSelector from '../modals/token-selector.tsx';
import ModalTrigger from '../modals/modal-trigger.tsx';

const RATIO = 0.9975;

const Swap: React.FC = () => {
  const { account, balance, handleConnectWallet } = useWalletContext();
  const { openModal, closeModal } = useModalContext();

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
    if (!account) {
      handleConnectWallet();
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

  const renderToken = (pos: 'first' | 'second') => {
    const currentPos = inverse ? (pos === 'first' ? 'second' : 'first') : pos;

    const value = currentPos === 'first' ? firstToken : secondToken;
    const onChange =
      currentPos === 'first' ? handleFirstTokenChange : handleSecondTokenChange;
    const tokenName = currentPos === 'first' ? 'MATIC' : secondTokenName;

    const valueInUSD = isNaN(parseFloat(value)) ? 0 : parseFloat(value) * 0.75;

    return (
      <div className="flex flex-col border rounded-xl p-4 gap-2 bg-gray-800">
        <div className="flex flex-row">
          <input
            className="grow text-lg md:text-2xl bg-transparent"
            type="text"
            pattern="^[0-9]*[.,]?[0-9]*$"
            value={value}
            onChange={onChange}
          />

          {currentPos === 'second' ? (
            <ModalTrigger
              modalName={'token-modal'}
              trigger={
                <button
                  className={'px-2 py-1 rounded-xl bg-gray-500'}
                  onClick={() => openModal('token-modal')}
                  data-testid={`token-button-${pos}`}
                >
                  {tokenName}
                </button>
              }
              modalContent={<TokenSelector onSelectToken={handleTokenChange} />}
              modalClassName="w-64"
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

  return (
    <div className="flex flex-col gap-2 md:border rounded-xl mx-auto max-w-lg p-4 m-2">
      <h1 className="text-2xl">Swap</h1>

      {renderToken('first')}

      <button
        className="-my-4 border p-2 mx-auto rounded-xl active:scale-[99%] bg-gray-900 z-10"
        onClick={() => setInverse((s) => !s)}
      >
        ⇕
      </button>

      {renderToken('second')}

      <button
        className={clsx('btn-primary h-12 mt-2', { 'bg-gray-500': loading })}
        onClick={handleSwap}
        disabled={loading}
      >
        {loading ? <ClipLoader /> : account ? 'Swap' : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default Swap;
