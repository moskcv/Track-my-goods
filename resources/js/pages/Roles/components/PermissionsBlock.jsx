import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPermissions } from '../../../services/permission';
import { Toggle } from '../../../ui';

const PermissionsBlock = ({ enabledPermissions, onChange }) => {
    const { data } = useQuery({
        queryKey: ['permissions'],
        queryFn: fetchPermissions
    })

    return (
        <div className='grid grid-cols-4 gap-4 justify-between mb-4'>
            {data?.data?.data?.map(permission => (
                <div className='flex items-center gap-2 mb-2 border border-gray-500 px-3 py-2' key={permission.id}>
                    <Toggle
                        label={permission.name}
                        enabled={enabledPermissions.findIndex(p => p.id === permission.id) !== -1}
                        onChange={() => onChange(permission)}
                    />
                </div>
            ))}
        </div>
    )
}

export default PermissionsBlock;
