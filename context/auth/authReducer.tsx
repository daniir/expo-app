import { IAuth } from '../../types';
import { AuthState } from './AuthProvider';

type AuthActionType = { type: 'SignIn'; payload: IAuth } | { type: 'SignOut' };

export const authReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case 'SignIn':
      return {
        ...state,
        auth: {
          auth: {
            id: action.payload.auth.id,
            fullName: action.payload.auth.fullName,
            isAuth: action.payload.auth.isAuth,
          },
        },
      };

    case 'SignOut': {
      return {
        ...state,
        auth: null,
      };
    }

    default:
      return state;
  }
};
