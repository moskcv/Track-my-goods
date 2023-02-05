import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';
import { deleteAttribute, fetchAttributes } from '../../../services/attributes';
import { Pagination, Panel, Table } from '../../../ui'

const AttributesIndexPage = () => {
    const queryClient = useQueryClient();

    const [queryParams, setQueryParams] = useState({
        page: 1,
        orderBy: 'created_at',
        sort: 'desc',
    });

    const { data } = useQuery({
        queryKey: ['attributes', queryParams],
        queryFn: fetchAttributes
    });

    const { mutate: destroy } = useMutation({
        mutationFn: deleteAttribute,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['attributes', queryParams] });
        }
    })

    return (
        <Panel>
            <Panel.Header>Атрибути</Panel.Header>
            <Panel.Body>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Назва</Table.HeaderCell>
                            <Table.HeaderCell align='right'>...</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data?.data?.data?.map(attribute => (
                            <Table.Row key={attribute.id}>
                                <Table.Cell><Link to={`/attributes/${attribute.id}/edit`}>{attribute.title}</Link></Table.Cell>
                                <Table.Cell align='right'>
                                    <button onClick={() => destroy(attribute.id)}><TrashIcon className='w-6 h-6' /></button>
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

export default AttributesIndexPage;
