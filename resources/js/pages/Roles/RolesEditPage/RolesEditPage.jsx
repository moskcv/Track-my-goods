import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRole, updateRole } from '../../../services/roles';
import { Panel } from '../../../ui';
import CreateUpdateForm from '../components/CreateUpdateForm';

const RolesEditPage = () => {
    const { id } = useParams();
    const [role, setRole] = useState({});
    useQuery({
        queryKey: ['role', id],
        queryFn: fetchRole,
        onSuccess: (data) => {
            setRole(data.data.data);
        }
    })

    const { mutate: update } = useMutation({
        mutationFn: updateRole
    })

    return (
        <Panel>
            <Panel.Header>{role.name}</Panel.Header>
            <Panel.Body>
                <CreateUpdateForm
                    onSubmit={() => update({...role})}
                    role={role}
                    setRole={setRole}
                />
            </Panel.Body>
        </Panel>
    );
}

export default RolesEditPage;
