import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, Form } from '../../../ui';
import { fetchRolesOptions } from '../../../services/roles';
import { fetchCustomersOptions } from '../../../services/customers';

const CreateUpdateForm = ({ onSubmit, user, setUser }) => {
    const { data: customers } = useQuery({
        queryKey: ['customers-options'],
        queryFn: fetchCustomersOptions,
        select: (data) => Object.keys(data.data).map(id => ({ value: id, text: data.data[id] })),
    });
    const { data: roles } = useQuery({
        queryKey: ['roles-options'],
        queryFn: fetchRolesOptions,
        select: (data) => Object.keys(data.data).map(id => ({ value: id, text: data.data[id] })),
    })

    return (
        <Form onSubmit={onSubmit}>
            <Form.Input
                label='Ім&apos;я'
                value={user.name || ''}
                onChange={e => setUser({...user, name: e.target.value})}
            />
            <Form.Input
                label='Email'
                type='email'
                value={user.email || ''}
                onChange={e => setUser({...user, email: e.target.value})}
            />
            <Form.Select
                label='Клієнт'
                value={user.customer_id || ''}
                onChange={e => setUser({...user, customer_id: e.target.value})}
                options={customers || []}
            />
            <Form.Select
                label='Роль'
                value={user.role_id || ''}
                onChange={e => setUser({...user, role_id: e.target.value})}
                options={roles || []}
            />
            <Button
                type='submit'
                content='Зберегти'
            />
        </Form>
    );
}

export default CreateUpdateForm;
