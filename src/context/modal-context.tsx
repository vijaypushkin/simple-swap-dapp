import React, { createContext, useState } from 'react';

export type TModalName = 'account-modal' | 'token-modal';

interface IModalContext {
  currentModal: TModalName | null;
  openModal: (modalName: TModalName) => void;
  closeModal: () => void;
}

interface IModalContextProps {
  children: React.ReactNode;
}

const ModalContext = createContext<IModalContext>({
  currentModal: null,
  openModal: () => {
    // noop
  },
  closeModal: () => {
    // noop
  },
});

const ModalProvider: React.FC<IModalContextProps> = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<TModalName | null>(null);

  const openModal = (modalName: TModalName) => {
    setCurrentModal(modalName);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <ModalContext.Provider value={{ currentModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext };
export default ModalProvider;
