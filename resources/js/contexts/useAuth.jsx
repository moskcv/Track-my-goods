import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const ALLOWED_URLS = [
    '/login'
];

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

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
        if (! ALLOWED_URLS.includes(location.pathname)) {
            get();
        }
    }, [])

    const value = {user, get};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext);
}
