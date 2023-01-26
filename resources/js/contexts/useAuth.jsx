import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const get = callback => {
        axios.get('/api/user')
            .then(response => {
                setUser(response.data);
                if (typeof callback === 'function') {
                    callback();
                }

            }).catch(error => {
                if (error.response.status === 401) {
                    navigate('login', { replace: true });
                }
            })
    }

    useEffect(() => {
        get();
    }, [])

    const value = {user, get};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}
