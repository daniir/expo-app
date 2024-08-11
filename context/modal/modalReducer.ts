import { ModalState } from './ModalProvider';

type ModalActionType = { type: 'HandleModal' };

export const modalReducer = (
  state: ModalState,
  action: ModalActionType
): ModalState => {
  switch (action.type) {
    case 'HandleModal':
      return {
        ...state,
        openModal: !state.openModal,
      };

    default:
      return state;
  }
};
