import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const Layout = () => (
    <div className='text-slate-600'>
        <Sidebar />
        <div className='min-h-screen pl-[280px]'>
            <Navigation />
            <main className='min-h-[calc(100vh-73px)] pt-[65px] bg-gray-100 dark:bg-gray-900'>
                <div className='px-4 py-6'>
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    </div>
)

export default Layout;
