import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchCategoriesOptions } from '../../../services/categories'
import { Button, Form } from '../../../ui'

const CategoryForm = ({ onSubmit, category, setCategory }) => {
    const { data: categories } = useQuery({
        queryKey: ['categories-options'],
        queryFn: fetchCategoriesOptions,
        select: (data) => Object.keys(data?.data)?.map(id => ({ value: id, text: data.data[id] })),
    })

    return (
        <Form onSubmit={onSubmit}>
            <Form.Input
                label='Назва'
                required
                value={category.title || ''}
                onChange={e => setCategory({...category, title: e.target.value})}
            />
            <Form.Select
                label='Батьківська категорія'
                options={categories}
                value={category.parent_id || ''}
                onChange={e => setCategory({...category, parent_id: e.target.value})}
            />
            <Button
                type='submit'
                content='Зберегти'
            />
        </Form>
    )
}

export default CategoryForm;
