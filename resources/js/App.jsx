import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { Layout } from './components';
import { AuthProvider, useAuth } from './contexts/useAuth';
import { CustomersEditPage, CustomersIndexPage, ProductsPage } from './pages';
import CustomersCreatePage from './pages/Customers/CustomersCreatePage/CustomersCreatePage';

const Test = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post('/logout')
            .then(() => {
                navigate('/login', { replace: true });
            })
    }

    return (
        <>
            <h1>Welcome {auth.user?.name}</h1>
            <button onClick={handleLogout}>Logout</button>
            <div>
                <Link to='/customers'>Customers</Link>
            </div>
            <div>
                <Link to='/sku'>Sku</Link>
            </div>
        </>
    )
}

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const auth = useAuth();
    const navigate = useNavigate();


    const handleFormSubmit = e => {
        e.preventDefault();

        axios.post('/login', loginData)
            .then(response => {
                if (response.status === 200) {
                    auth.refetch();
                    navigate('/', { replace: true });
                }
            })
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input type='text' id='email' value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})} />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const App = () => (
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route element={<Layout />}>
                    <Route path='/' element={<Test />} />
                    <Route path='products' element={<ProductsPage />} />
                    <Route path='customers' element={<CustomersIndexPage />} />
                    <Route path='customers/create' element={<CustomersCreatePage />} />
                    <Route path='customers/:id/edit' element={<CustomersEditPage />} />
                </Route>
            </Routes>

            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </AuthProvider>
    </QueryClientProvider>
);

export default App;
