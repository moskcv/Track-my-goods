import React, { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAuthUser } from '../services/users';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { data, error, refetch } = useQuery({ queryKey: ['user'], queryFn: getAuthUser }, { retry: false });

    const user = {...data?.data};

    user.can = permission => {
        return data?.data?.permissions?.includes(permission) || false;
    }

    const value = { user, error, refetch };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}
