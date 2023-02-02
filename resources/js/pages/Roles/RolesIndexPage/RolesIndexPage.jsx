import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteRoles, fetchRoles } from '../../../services/roles';
import { Pagination, Panel, Table } from '../../../ui';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

const RolesIndexPage = () => {
    const queryClient = useQueryClient();

    const [queryParams, setQueryParams] = useState({
        page: 1,
        sort: 'asc',
        orderBy: 'created_at',
    })
    const { data } = useQuery({
        queryKey: ['roles', queryParams],
        queryFn: fetchRoles
    })

    const { mutate: remove } = useMutation({
        mutationFn: deleteRoles,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['roles', queryParams] })
        }
    })

    return (
        <Panel>
            <Panel.Header>Ролі</Panel.Header>
            <Panel.Body>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Назва</Table.HeaderCell>
                            <Table.HeaderCell align='right'>...</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data?.data?.data.map(role => (
                            <Table.Row key={role.id}>
                                <Table.Cell><Link to={`/roles/${role.id}/edit`}>{role.name}</Link></Table.Cell>
                                <Table.Cell align='right'>
                                    <button type='button' onClick={() => remove(role.id)}><TrashIcon className='w-6 h-6' /></button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Panel.Body>
            <Panel.Footer>
                {data?.data?.last_page > 1 &&
                    <Pagination
                        currentPage={queryParams.page}
                        totalPages={data?.data?.last_page}
                        onPageChange={value => setQueryParams({...queryParams, page: value})}
                    />
                }
            </Panel.Footer>
        </Panel>
    )
}

export default RolesIndexPage
