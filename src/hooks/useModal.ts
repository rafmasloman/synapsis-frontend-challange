import { useState } from 'react';

const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal };
};

export default useModal;
