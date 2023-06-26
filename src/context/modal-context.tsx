import React, { createContext, useState } from 'react';

interface IModalContext {
  currentModal: string | null;
  openModal: (modalName: string) => void;
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
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const openModal = (modalName: string) => {
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
