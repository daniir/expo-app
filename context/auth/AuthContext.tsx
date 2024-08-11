import { createContext } from 'react';
import { IAuth } from '../../types';

interface ContextProps {
  auth: IAuth | null;
  signIn: (payload: IAuth) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as ContextProps);
