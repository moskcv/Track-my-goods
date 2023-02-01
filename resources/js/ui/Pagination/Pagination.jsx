import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useMemo } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = useMemo(() => {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage < 5) {
            const items = Array.from({ length: 5 }, (_, i) => i + 1);
            items.push('-');
            items.push(totalPages);

            return items;
        }

        if (currentPage >= 5 && (currentPage + 4) <= totalPages) {
            return [1, '-', currentPage - 1, currentPage, currentPage + 1, '-', totalPages];
        }

        if (currentPage >= 5 && (currentPage + 4) > totalPages) {
            const items = [1, '-'];
            for (let i = totalPages - 4; i <= totalPages; i++) {
                items.push(i);
            }

            return items;
        }

        return [];
    }, [currentPage, totalPages])

    return (
        <div className='flex' role='navigation'>
            <button
                className='border border-main px-3 py-2 items-center text-l bg-white hover:bg-gray-100 rounded-l-md'
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                type='button'
                disabled={(currentPage === 1)}
            >
                <ChevronLeftIcon className='w-5 h-5' />
            </button>
            {pages.map((page, i) => (
                <React.Fragment key={i}>
                    {(page === '-') ?
                        <button type='button' className='border-r border-y border-main px-3 py-2 items-center text-l bg-white hover:bg-gray-100'>...</button>
                        :
                        <button
                            className={`border-r border-y border-main px-3 py-2 items-center text-l hover:bg-gray-100 ${(currentPage === page) ? 'bg-gray-100' : 'bg-white'}`}
                            onClick={() => onPageChange(page)}
                            type='button'
                        >
                            {page}
                        </button>
                    }
                </React.Fragment>
            ))}
            <button
                className='border-r border-y border-main px-3 py-2 items-center text-l bg-white hover:bg-gray-100  rounded-r-md'
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                type='button'
                disabled={(currentPage === totalPages)}
            >
                <ChevronRightIcon className='w-5 h-5' />
            </button>
        </div>
    )
}

export default Pagination;
