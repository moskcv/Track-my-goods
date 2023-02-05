import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteStorage, fetchStorages } from '../../../services/storages';
import { Pagination, Panel, Table } from '../../../ui';

const StoragesIndexPage = () => {
    const queryClient = useQueryClient();

    const [queryParams, setQueryParams] = useState({
        page: 1,
        'orderBy': 'created_at',
        'sort': 'asc',
    });

    const { data } = useQuery({
        queryKey: ['storages', queryParams],
        queryFn: fetchStorages
    })

    const { mutate: destroy } = useMutation({
        mutationFn: deleteStorage,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['storages', queryParams] })
        }
    })

    return (
        <Panel>
            <Panel.Header>Склади/Магазини</Panel.Header>
            <Panel.Body>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Назва</Table.HeaderCell>
                            <Table.HeaderCell align='right'>...</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data?.data?.data?.map(storage => (
                            <Table.Row key={storage.id}>
                                <Table.Cell><Link to={`/storages/${storage.id}/edit`}>{storage.title}</Link></Table.Cell>
                                <Table.Cell align='right'>
                                    <button onClick={() => destroy(storage.id)}><TrashIcon className='w-6 h-6' /></button>
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
                        totalPages={data?.data?.meta?.last_page}
                        onPageChange={value => setQueryParams({...queryParams, page: value})}
                    />
                }
            </Panel.Footer>
        </Panel>
    )
}

export default StoragesIndexPage
