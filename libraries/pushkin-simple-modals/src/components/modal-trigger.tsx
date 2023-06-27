import React from 'react';
import Modal from './modal.tsx';
import { useModalContext } from '../context/modal-context.tsx';

interface IModalTriggerProps<T = string> {
  modalName: T;
  trigger: string | React.ReactNode;
  modalContent: React.ReactNode;
  triggerClassName?: string;
  modalClassName?: string;
}

const ModalTrigger: React.FC<IModalTriggerProps> = (props) => {
  const { closeModal, openModal, currentModal } = useModalContext();
  return (
    <>
      <button
        className={props.triggerClassName}
        onClick={() => openModal(props.modalName)}
        data-testid={`${props.modalName}-trigger`}
      >
        {props.trigger}
      </button>
      <Modal
        isOpen={props.modalName === currentModal}
        onClose={closeModal}
        className={props.modalClassName}
        modalName={props.modalName}
      >
        {props.modalContent}
      </Modal>
    </>
  );
};

export default ModalTrigger;
