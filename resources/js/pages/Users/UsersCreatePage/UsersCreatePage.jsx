import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../services/users';
import { Panel } from '../../../ui';
import UserForm from '../components/UserForm';

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
                <UserForm
                    onSubmit={() => create({...user})}
                    user={user}
                    setUser={setUser}
                />
            </Panel.Body>
        </Panel>
    );
}

export default UsersCreatePage;
