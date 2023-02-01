import React from 'react';
import { useQuery } from '@tanstack/react-query';

const ProductsPage = () => {
    const { data } = useQuery('products', () => {
        return axios.get('/api/v1/products')
            .then(response => response.data);
    })

    return (
        <div>{data?.map(product => (
            <div key={product.id} className='border mb-4 rounded-xl bg-white p-4'>
                <div className='flex justify-between'>
                    <h2>{product.name}</h2>
                    <div>
                        <span className='text-red-300'>{product.price}</span>
                        <span> / </span>
                        <span className='text-green-300'>{(product.price * product.extra / 100) + product.price}</span>
                    </div>
                </div>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Amount</td>
                            <td>Price</td>
                            <td>Sell price</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                    {product?.sku?.map((sku, i) => (
                        <tr key={sku.id}>
                            <td>{i + 1}</td>
                            <td>{sku.name}</td>
                            <td>18</td>
                            <td>{sku.price}</td>
                            <td>{(sku.price * sku.extra / 100) + sku.price}</td>
                            <td>...</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        ))}</div>
    )
}

export default ProductsPage;
