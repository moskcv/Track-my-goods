import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Pagination, Panel, Table } from '../../../ui';
import { deleteUser, fetchUsers } from '../../../services/users';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

const UsersIndexPage = () => {
    const queryClient = useQueryClient();
    const [queryParams, setQueryParams] = useState({
        page: 1,
        orderBy: 'created_at',
        sort: 'asc',
    })

    const { data } = useQuery({
        queryKey: ['users', queryParams],
        queryFn: fetchUsers
    })

    const { mutate: remove } = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users', queryParams] });
        }
    })

    return (
        <Panel>
            <Panel.Header>Користувачі</Panel.Header>
            <Panel.Body>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Ім&apos;я</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Клієнт</Table.HeaderCell>
                            <Table.HeaderCell>Роль</Table.HeaderCell>
                            <Table.HeaderCell align='right'>...</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data?.data?.data?.map(user => (
                            <Table.Row key={user.id}>
                                <Table.Cell><Link to={`/users/${user.id}/edit`}>{user.name}</Link></Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.customer?.name}</Table.Cell>
                                <Table.Cell>{user.roles?.name}</Table.Cell>
                                <Table.Cell align='right'>
                                    <button type='button' onClick={() => remove(user.id)}><TrashIcon className='w-6 h-6' /></button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Panel.Body>
            <Panel.Footer>
                {(data?.data?.meta?.last_page > 1) &&
                    <Pagination
                        currentPage={queryParams.page}
                        onPageChange={value => setQueryParams({...queryParams, page: value})}
                    />
                }
            </Panel.Footer>
        </Panel>
    );
}

export default UsersIndexPage;
