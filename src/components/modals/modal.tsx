import { useEffect, useRef } from 'react';
import clsx from 'clsx';

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

  useEffect(() => {
    if (isOpen && modalRef.current?.open === false) {
      modalRef.current?.showModal();
    } else if (!isOpen && modalRef.current?.open === true) {
      modalRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      onClose={onClose}
      className={clsx('w-8/12 rounded-xl relative', className)}
    >
      <button className="absolute right-4 top-4" onClick={onClose}>
        &times;
      </button>
      {children}
    </dialog>
  );
};

export default Modal;
