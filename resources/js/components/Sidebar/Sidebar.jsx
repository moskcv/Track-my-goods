import React from 'react';
import { HomeIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className='bg-white dark:bg-gray-800 fixed w-[280px] h-full inset-y-0'>
            <div className='flex items-center border-b border-r border-gray-300 h-[65px]'>
                <NavLink to='/' className='flex px-4 py-2 items-center'>
                    <HomeIcon className='w-6 inline mr-4' />
                    <span>Track my goods</span>
                </NavLink>
            </div>
            <div className='pt-6 border-r border-gray-300 h-full'>
                <ul>
                    <li>
                        <NavLink to='/' className='flex px-4 py-2 items-center'>
                            <HomeIcon className='w-6 inline mr-4' />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='products' className='flex px-4 py-2 items-center'>
                            <LightBulbIcon className='w-6 inline mr-4' />
                            <span>Products</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;
