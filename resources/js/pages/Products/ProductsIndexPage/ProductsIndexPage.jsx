import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../../../services/products';
import { Pagination, Panel } from '../../../ui';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const ProductsIndexPage = () => {
    const [queryParams, sestQueryParams] = useState({
        page: 1,
        orderBy: 'created_at',
        sort: 'desc',
    })
    const { data } = useQuery({
        queryKey: ['products', queryParams],
        queryFn: fetchProducts
    });

    return (
        <>
            {data?.data?.data?.map(product => (
                <Panel key={product.id}>
                    <Panel.Body>
                        <div className='flex items-center justify-between gap-2'>
                            <div className='flex-1'>
                                <div>{product.title}</div>
                                <div>{product.category?.title}</div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='text-green-300'>$ 50,00</div>
                                <div className='text-red-300'>$ 48,50</div>
                                <div>18</div>
                            </div>
                            <ChevronDownIcon className='w-6 h-6' />
                        </div>
                    </Panel.Body>
                </Panel>
            ))}

            {(data?.data?.meta?.last_page > 1) &&
                <Pagination
                    currentPage={queryParams.page}
                    totalPages={data?.data?.meta?.last_page}
                    onPageChange={value => sestQueryParams({...queryParams, page: value})}
                />
            }
        </>
    )
}

export default ProductsIndexPage
