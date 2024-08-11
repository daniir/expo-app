import { createContext } from 'react';

interface ContextProps {
  openModal: boolean;
  handleModal: () => void;
}

export const ModalContext = createContext({} as ContextProps);
