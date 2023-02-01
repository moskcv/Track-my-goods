import React from 'react';
import { Bars3Icon, BellIcon, EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
    return (
        <div className='z-50 h-[65px] bg-white dark:bg-gray-800 border-b border-gray-300 flex items-center px-4 fixed w-[calc(100%-280px)]'>
            <Bars3Icon className='w-6' />
            <div className='flex-1'>
                Search
            </div>
            <div>
                <ul className='flex gap-4'>
                    <li><BellIcon className='w-6' /></li>
                    <li><EnvelopeIcon className='w-6' /></li>
                    <li><UserIcon className='w-6' /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;
