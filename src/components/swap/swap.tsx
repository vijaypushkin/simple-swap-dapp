import React, { useState } from 'react';
import { useWalletContext } from '../../context/context-hooks.ts';
import { ClipLoader } from 'react-spinners';
import clsx from 'clsx';

const RATIO = 0.9975;

const Swap: React.FC = () => {
  const { account, handleConnectWallet } = useWalletContext();

  const [firstToken, setFirstToken] = useState('');
  const [secondToken, setSecondToken] = useState('');
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

  const renderToken = (name: 'first' | 'second') => {
    const value = name === 'first' ? firstToken : secondToken;
    const onChange =
      name === 'first' ? handleFirstTokenChange : handleSecondTokenChange;
    const tokenName = name === 'first' ? 'MATIC' : 'USDC';

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
          <button className="token px-2 py-1">{tokenName}</button>
        </div>

        <div className="text-xs">${valueInUSD}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 border rounded-xl mx-auto max-w-lg p-4 m-2">
      <h1 className="text-2xl">Swap</h1>

      {renderToken(inverse ? 'second' : 'first')}

      <button
        className="-my-4 border p-2 mx-auto rounded-xl active:scale-[99%] bg-gray-900 z-10"
        onClick={() => setInverse((s) => !s)}
      >
        ⇕
      </button>

      {renderToken(inverse ? 'first' : 'second')}

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
