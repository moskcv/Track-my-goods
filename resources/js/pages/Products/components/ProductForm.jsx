import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchCategoriesOptions } from '../../../services/categories'
import { Form } from '../../../ui'

const ProductForm = ({ onSubmit, product, setProduct }) => {
    const { data: categories } = useQuery({
        queryKey: ['categories-options'],
        queryFn: fetchCategoriesOptions,
        // select: (data) => {
        //     // return data?.data?.map(category => ({  }))
        // }
    })

    return (
        <Form onSubmit={onSubmit}>
            <Form.Input
                label='Назва'
                value={product.title || ''}
                onChange={e => setProduct({...product, title: e.target.value})}
            />
        </Form>
    )
}

export default ProductForm
