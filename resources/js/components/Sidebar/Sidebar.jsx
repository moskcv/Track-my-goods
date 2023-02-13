import React from 'react';
import { BuildingOfficeIcon, ClipboardDocumentIcon, CogIcon, CubeIcon, FingerPrintIcon, HomeIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
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
                        <NavLink to='customers' className='flex px-4 py-2 items-center'>
                            <BuildingOfficeIcon className='w-6 inline mr-4' />
                            <span>Клієнти</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='users' className='flex px-4 py-2 items-center'>
                            <UsersIcon className='w-6 inline mr-4' />
                            <span>Користувачі</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='roles' className='flex px-4 py-2 items-center'>
                            <FingerPrintIcon className='w-6 inline mr-4' />
                            <span>Ролі</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='categories' className='flex px-4 py-2 items-center'>
                            <ClipboardDocumentIcon className='w-6 inline mr-4' />
                            <span>Категорії</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='storages' className='flex px-4 py-2 items-center'>
                            <MapPinIcon className='w-6 inline mr-4' />
                            <span>Склади/Магазини</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='attributes' className='flex px-4 py-2 items-center'>
                            <CogIcon className='w-6 inline mr-4' />
                            <span>Атрибути</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='products' className='flex px-4 py-2 items-center'>
                            <CubeIcon className='w-6 inline mr-4' />
                            <span>Товари</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;
