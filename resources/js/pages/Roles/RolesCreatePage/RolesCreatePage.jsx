import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Panel } from '../../../ui';
import { createRole } from '../../../services/roles';
import RoleForm from '../components/RoleForm';

const RolesCreatePage = () => {
    const [role, setRole] = useState({});

    const navigate = useNavigate();

    const { mutate: create } = useMutation({
        mutationFn: createRole,
        onSuccess: (data) => {
            navigate(`/roles/${data.data.data.id}/edit`, { replace: true });
        }
    })

    return (
        <Panel>
            <Panel.Header>Нова роль</Panel.Header>
            <Panel.Body>
                <RoleForm
                    onSubmit={() => create({...role})}
                    role={role}
                    setRole={setRole}
                />
            </Panel.Body>
        </Panel>
    )
}

export default RolesCreatePage;
