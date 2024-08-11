import { FC, ReactNode, useReducer } from 'react';
import { modalReducer } from './modalReducer';
import { ModalContext } from './ModalContext';

interface Props {
  children: ReactNode;
}

export interface ModalState {
  openModal: boolean;
}

const MODAL_INITIAL_STATE = {
  openModal: false,
};

export const ModalProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, MODAL_INITIAL_STATE);

  const handleModal = () => {
    dispatch({
      type: 'HandleModal',
    });
  };

  return (
    <ModalContext.Provider
      value={{
        ...state,
        handleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
