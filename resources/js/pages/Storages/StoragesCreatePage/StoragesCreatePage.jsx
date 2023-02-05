import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createStorage } from '../../../services/storages';
import { Panel } from '../../../ui'
import StorageForm from '../components/StorageForm'

const StoragesCreatePage = () => {
    const [storage, setStorage] = useState({});

    const navigate = useNavigate();

    const { mutate: create } = useMutation({
        mutationFn: createStorage,
        onSuccess: data => {
            navigate(`/storages/${data?.data?.data?.id}/edit`);
        }
    })

    return (
        <Panel>
            <Panel.Header>Новий склад/магазин</Panel.Header>
            <Panel.Body>
                <StorageForm
                    onSubmit={() => create({...storage})}
                    storage={storage}
                    setStorage={setStorage}
                />
            </Panel.Body>
        </Panel>
    )
}

export default StoragesCreatePage
