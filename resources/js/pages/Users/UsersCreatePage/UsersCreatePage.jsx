import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchCustomersOptions } from '../../../services/customers';
import { fetchRolesOptions } from '../../../services/roles';
import { createUser } from '../../../services/users';
import { Button, Form, Panel } from '../../../ui';
import CreateUpdateForm from '../components/CreateUpdateForm';

const UsersCreatePage = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const { mutate: create } = useMutation({
        mutationFn: createUser,
        onSuccess: (data) => {
            navigate(`/users/${data.data.data.id}/edit`);
        }
    })

    return (
        <Panel>
            <Panel.Header>Новий користувач</Panel.Header>
            <Panel.Body>
                <CreateUpdateForm
                    onSubmit={() => create({...user})}
                    user={user}
                    setUser={setUser}
                />
            </Panel.Body>
        </Panel>
    );
}

export default UsersCreatePage;
