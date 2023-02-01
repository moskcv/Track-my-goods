import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchCustomer, updateCustomer } from '../../../services/customers';
import { Panel } from '../../../ui';
import CreateUpdateForm from '../components/CreateUpdateForm';

const CustomersEditPage = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState({})

    const { data } = useQuery({
        queryKey: ['customer', id],
        queryFn: fetchCustomer,
        onSuccess: data => {
            setCustomer(data.data.data);
        }
    });

    const { mutate: update } = useMutation({
        mutationFn: updateCustomer
    })

    return (
        <Panel>
            <Panel.Header>{data?.data.data.name}</Panel.Header>
            <Panel.Body>
                <CreateUpdateForm
                    onSubmit={() => update({...customer, id})}
                    customer={customer}
                    setCustomer={setCustomer}
                />
            </Panel.Body>
        </Panel>
    )
}

export default CustomersEditPage;
