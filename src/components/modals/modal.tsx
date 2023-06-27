import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { TModalName } from '../../context/modal-context.tsx';

import styles from './modal.module.scss';

interface IModalProps {
  modalName: TModalName;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<IModalProps> = ({
  modalName,
  isOpen,
  onClose,
  children,
  className,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  // ? This flag is for the closing animation
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (isOpen && modalRef.current?.open === false) {
      modalRef.current?.showModal();
    } else if (!isOpen && modalRef.current?.open === true) {
      setClosing(true);

      setTimeout(() => {
        modalRef.current?.close();
        setClosing(false);
      }, 350);
    }
  }, [isOpen]);

  const handleClick = (ev: React.MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = modalRef.current?.getBoundingClientRect();

    if (!dialogDimensions) {
      return;
    }

    const isClickOutside =
      ev.clientX < dialogDimensions.left ||
      ev.clientX > dialogDimensions.right ||
      ev.clientY < dialogDimensions.top ||
      ev.clientY > dialogDimensions.bottom;

    if (isClickOutside) {
      onClose();
    }
  };

  return (
    <dialog
      ref={modalRef}
      onClose={onClose}
      onClick={handleClick}
      className={clsx('w-8/12 rounded-xl relative', className, styles.modal, {
        [styles.closing]: closing,
      })}
      data-testid={modalName}
    >
      <button
        className="absolute right-4 top-4"
        onClick={onClose}
        data-testid="close-modal"
      >
        &times;
      </button>
      {children}
    </dialog>
  );
};

export default Modal;
