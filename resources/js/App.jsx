import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Layout } from './components';
import { AuthProvider, useAuth } from './contexts/useAuth';
import { AttributesCreatePage, AttributesEditPage, AttributesIndexPage, CategoriesCreatePage, CategoriesEditPage, CategoriesIndexPage, CustomersCreatePage, CustomersEditPage, CustomersIndexPage, ProductsCreatePage, ProductsEditPage, ProductsIndexPage, RolesCreatePage, RolesEditPage, RolesIndexPage, StoragesCreatePage, StoragesEditPage, StoragesIndexPage, UsersCreatePage, UsersEditPage, UsersIndexPage } from './pages';

const Test = () => {
    const auth = useAuth();

    return (
        <h1 className='text-center font-bold text-lg'>Welcome {auth.user?.name}</h1>
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
            retry: false,
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

                    <Route path='customers' element={<CustomersIndexPage />} />
                    <Route path='customers/create' element={<CustomersCreatePage />} />
                    <Route path='customers/:id/edit' element={<CustomersEditPage />} />

                    <Route path='users' element={<UsersIndexPage />} />
                    <Route path='users/create' element={<UsersCreatePage />} />
                    <Route path='users/:id/edit' element={<UsersEditPage />} />

                    <Route path='roles' element={<RolesIndexPage />} />
                    <Route path='roles/create' element={<RolesCreatePage />} />
                    <Route path='roles/:id/edit' element={<RolesEditPage />} />

                    <Route path='categories' element={<CategoriesIndexPage />} />
                    <Route path='categories/create' element={<CategoriesCreatePage />} />
                    <Route path='categories/:id/edit' element={<CategoriesEditPage />} />

                    <Route path='storages' element={<StoragesIndexPage />} />
                    <Route path='storages/create' element={<StoragesCreatePage />} />
                    <Route path='storages/:id/edit' element={<StoragesEditPage />} />

                    <Route path='attributes' element={<AttributesIndexPage />} />
                    <Route path='attributes/create' element={<AttributesCreatePage />} />
                    <Route path='attributes/:id/edit' element={<AttributesEditPage />} />

                    <Route path='products' element={<ProductsIndexPage />} />
                    <Route path='products/create' element={<ProductsCreatePage />} />
                    <Route path='products/:id/edit' element={<ProductsEditPage />} />
                </Route>
            </Routes>

            <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </AuthProvider>
    </QueryClientProvider>
);

export default App;
