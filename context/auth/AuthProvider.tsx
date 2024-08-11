import { FC, ReactNode, useReducer } from 'react';
import { authReducer } from './authReducer';
import { AuthContext } from './AuthContext';
import { IAuth } from '../../types';

interface Props {
  children: ReactNode;
}

export interface AuthState {
  auth: IAuth | null;
}

const AUTH_INITIAL_STATE = {
  auth: null,
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const signIn = (payload: IAuth) => {
    dispatch({
      type: 'SignIn',
      payload,
    });
  };

  const signOut = () => {
    dispatch({
      type: 'SignOut',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
