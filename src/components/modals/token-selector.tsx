import React from 'react';
import Modal from './modal.tsx';
import { useModalContext } from '../../context/context-hooks.ts';

const TOKEN_LIST = ['USDC', 'USDT', 'DAI', 'WETH', 'WBTC', 'UNI', 'LINK'];

interface ITokenSelectorProps {
  onSelectToken: (token: string) => void;
}
const TokenSelector: React.FC<ITokenSelectorProps> = (props) => {
  const { currentModal, closeModal } = useModalContext();
  return (
    <>
      <Modal
        isOpen={currentModal === 'token-modal'}
        onClose={closeModal}
        className="w-64"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl mb-2">Select a Token</h1>

          {TOKEN_LIST.map((token) => (
            <button
              key={token}
              className="my-1"
              onClick={() => props.onSelectToken(token)}
            >
              {token}
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default TokenSelector;
