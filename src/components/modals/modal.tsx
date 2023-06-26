import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from './modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<IModalProps> = ({
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

  return (
    <dialog
      ref={modalRef}
      onClose={onClose}
      className={clsx(
        'w-8/12 rounded-xl relative',
        className,
        styles.modal,
        closing,
        {
          [styles.closing]: closing,
        },
      )}
    >
      <button className="absolute right-4 top-4" onClick={onClose}>
        &times;
      </button>
      {children}
    </dialog>
  );
};

export default Modal;
