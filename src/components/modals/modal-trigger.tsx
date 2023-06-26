import Modal from './modal.tsx';
import { TModalName } from '../../context/modal-context.tsx';
import { useModalContext } from '../../context/context-hooks.ts';

interface IModalTriggerProps {
  modalName: TModalName;
  trigger: React.ReactNode;
  modalContent: React.ReactNode;
  modalClassName?: string;
}

const ModalTrigger: React.FC<IModalTriggerProps> = (props) => {
  const { closeModal, currentModal } = useModalContext();
  return (
    <>
      {props.trigger}
      <Modal
        isOpen={props.modalName === currentModal}
        onClose={closeModal}
        className={props.modalClassName}
      >
        {props.modalContent}
      </Modal>
    </>
  );
};

export default ModalTrigger;
