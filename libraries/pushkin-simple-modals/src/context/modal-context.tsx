import React, { createContext, useContext, useState } from 'react';

export type TModalName =
  | 'account-modal'
  | 'token-modal'
  | 'test-modal'
  | string;

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

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return context;
};

export { ModalContext, useModalContext };
export default ModalProvider;
