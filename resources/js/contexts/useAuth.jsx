import { createContext, useContext } from 'react';
import { useQuery } from 'react-query';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { data, error, refetch } = useQuery('user', () => {
        return axios.get('/api/user')
            .then(response => response.data);
    }, {
        retry: false,
    })

    const value = { user: data, refetch };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}
