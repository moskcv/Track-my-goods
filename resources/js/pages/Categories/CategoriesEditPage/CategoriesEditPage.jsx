import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchCategory, updateCategory } from '../../../services/categories'
import { Panel } from '../../../ui'
import CreateUpdateForm from '../components/CreateUpdateForm'

const CategoriesEditPage = () => {
    const { id } = useParams();
    const [category, setCategory] = useState({});

    useQuery({
        queryKey: ['category', id],
        queryFn: fetchCategory,
        onSuccess: (data) => {
            setCategory(data?.data?.data);
        }
    });

    const { mutate: update } = useMutation({
        mutationFn: updateCategory
    })

    return (
        <Panel>
            <Panel.Header>{category?.title}</Panel.Header>
            <Panel.Body>
                <CreateUpdateForm
                    onSubmit={() => update({...category})}
                    category={category}
                    setCategory={setCategory}
                />
            </Panel.Body>
        </Panel>
    )
}

export default CategoriesEditPage
