import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser, updateUser } from '../../../services/users';
import { Panel } from '../../../ui';
import CreateUpdateForm from '../components/CreateUpdateForm';

const UsersEditPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useQuery({
        queryKey: ['user', id],
        queryFn: fetchUser,
        onSuccess: (data) => {
            setUser(data.data.data);
        }
    })

    const { mutate: update } = useMutation({
        mutationFn: updateUser,
        onSuccess: data => console.log(data)
    })

    return (
        <Panel>
            <Panel.Header>{user.name}</Panel.Header>
            <Panel.Body>
                <CreateUpdateForm
                    onSubmit={() => update({...user})}
                    user={user}
                    setUser={setUser}
                />
            </Panel.Body>
        </Panel>
    )
}

export default UsersEditPage;
