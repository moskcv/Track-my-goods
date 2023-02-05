import React from 'react';
import { Button, Form } from '../../../ui';
import PermissionsBlock from './PermissionsBlock';

const RoleForm = ({ onSubmit, role, setRole }) => {
    const handlePermission = permission => {
        const newRole = {...role};
        if (! newRole.permissions) {
            newRole.permissions = [];
        }

        const index = newRole.permissions.findIndex(p => p.id === permission.id);

        if (index === -1) {
            newRole.permissions.push(permission);
        } else {
            newRole.permissions.splice(index, 1);
        }

        setRole(newRole);
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Input
                label='Назва'
                value={role.name || ''}
                onChange={e => setRole({...role, name: e.target.value})}
                required
            />

            <PermissionsBlock enabledPermissions={role.permissions || []} onChange={handlePermission} />

            <Button type='submit' content='Зберегти' />
        </Form>
    )
}

export default RoleForm;
