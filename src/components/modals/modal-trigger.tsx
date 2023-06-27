import Modal from './modal.tsx';
import { TModalName } from '../../context/modal-context.tsx';
import { useModalContext } from '../../context/context-hooks.ts';

interface IModalTriggerProps {
  modalName: TModalName;
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
