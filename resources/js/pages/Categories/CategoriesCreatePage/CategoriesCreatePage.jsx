import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { Panel } from '../../../ui'
import CreateUpdateForm from '../components/CreateUpdateForm'
import { createCategory } from '../../../services/categories';
import { useNavigate } from 'react-router-dom';

const CategoriesCreatePage = () => {
    const [category, setCategory] = useState({});

    const navigate = useNavigate();

    const { mutate: create } = useMutation({
        mutationFn: createCategory,
        onSuccess: (data) => {
            navigate(`/categories/${data?.data?.data?.id}/edit`);
        }
    })

    return (
        <Panel>
            <Panel.Header>Нова категорія</Panel.Header>
            <Panel.Body>
                <CreateUpdateForm
                    onSubmit={() => create({...category})}
                    category={category}
                    setCategory={setCategory}
                />
            </Panel.Body>
        </Panel>
    )
}

export default CategoriesCreatePage
