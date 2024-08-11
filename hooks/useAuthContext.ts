import { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';

export const useAuthContext = () => {
  return useContext(AuthContext);
};
