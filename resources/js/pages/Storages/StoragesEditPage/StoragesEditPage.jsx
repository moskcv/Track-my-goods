import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchStorage, updateStorage } from '../../../services/storages';
import { Panel } from '../../../ui'
import StorageForm from '../components/StorageForm'

const StoragesEditPage = () => {
    const { id } = useParams();
    const [storage, setStorage] = useState({});

    useQuery({
        queryKey: ['storage', id],
        queryFn: fetchStorage,
        onSuccess: (data) => {
            setStorage(data?.data?.data);
        }
    });

    const { mutate: update } = useMutation({
        mutationFn: updateStorage
    })

    return (
        <Panel>
            <Panel.Header>Новий склад/магазин</Panel.Header>
            <Panel.Body>
                <StorageForm
                    onSubmit={() => update({...storage})}
                    storage={storage}
                    setStorage={setStorage}
                />
            </Panel.Body>
        </Panel>
    )
}

export default StoragesEditPage
