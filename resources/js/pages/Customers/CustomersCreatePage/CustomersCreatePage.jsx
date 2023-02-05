import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createCustomer } from '../../../services/customers';
import { Panel } from '../../../ui';
import CustomerForm from '../components/CustomerForm';

const CustomersCreatePage = () => {
    const [customer, setCustomer] = useState({});

    const navigate = useNavigate();

    const { mutate: create } = useMutation({
        mutationFn: createCustomer,
        onSuccess: (data) => {
            navigate(`/customers/${data.data.id}/edit`, { replace: true });
        }
    })

    return (
        <Panel>
            <Panel.Header>Новий клієнт</Panel.Header>
            <Panel.Body>
                <CustomerForm
                    onSubmit={() => create({...customer})}
                    customer={customer}
                    setCustomer={setCustomer}
                />
            </Panel.Body>
        </Panel>
    )
}

export default CustomersCreatePage;
