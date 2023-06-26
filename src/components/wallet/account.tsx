import React, { useContext } from 'react';
import { WalletContext } from '../../context/wallet-context.tsx';
import { ModalContext } from '../../context/modal-context.tsx';
import { truncateAddress } from '../../utils/wallet-utils.ts';
import Modal from '../modals/modal.tsx';

interface IAccountModalProps {
  children: React.ReactNode;
}

const Account: React.FC<IAccountModalProps> = (props) => {
  const { account } = useContext(WalletContext);
  const { openModal, currentModal, closeModal } = useContext(ModalContext);

  return (
    <>
      <button onClick={() => openModal('account-modal')}>
        {account ? truncateAddress(account) : 'Connect Wallet'}
      </button>

      <Modal isOpen={currentModal === 'account-modal'} onClose={closeModal}>
        {props.children}
      </Modal>
    </>
  );
};

export default Account;
