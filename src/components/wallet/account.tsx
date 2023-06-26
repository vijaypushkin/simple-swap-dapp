import React, { useContext } from 'react';
import { WalletContext } from '../../context/wallet-context.tsx';
import { ModalContext } from '../../context/modal-context.tsx';
import { truncateAddress } from '../../utils/wallet-utils.ts';

const Account: React.FC = () => {
  const { account } = useContext(WalletContext);
  const { openModal } = useContext(ModalContext);

  return (
    <button onClick={() => openModal('account-modal')}>
      {account ? truncateAddress(account) : 'Connect Wallet'}
    </button>
  );
};

export default Account;
