import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { deleteCategory, fetchCategories } from '../../../services/categories';
import { Pagination, Panel, Table } from '../../../ui';

const CategoriesIndexPage = () => {
    const queryClient = useQueryClient();
    const [queryParams, setQueryParams] = useState({
        page: 1,
        'orderBy': 'created_at',
        'sort': 'desc',
    })

    const { data } = useQuery({
        queryKey: ['categories', queryParams],
        queryFn: fetchCategories
    })

    const { mutate: destroy } = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories', queryParams] });
        }
    })

    return (
        <Panel>
            <Panel.Header>Категорії</Panel.Header>
            <Panel.Body>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Назва</Table.HeaderCell>
                            <Table.HeaderCell>Батьківська категорія</Table.HeaderCell>
                            <Table.HeaderCell align='right'>...</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data?.data?.data?.map(category => (
                            <Table.Row key={category.id}>
                                <Table.Cell><Link to={`/categories/${category.id}/edit`}>{category.title}</Link></Table.Cell>
                                <Table.Cell>{category.parent?.title}</Table.Cell>
                                <Table.Cell align='right'>
                                    <button type='button' onClick={() => destroy(category.id)}><TrashIcon className='w-6 h-6' /></button>
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
                        totalPages={data?.data?.meta.last_page}
                    />
                }
            </Panel.Footer>
        </Panel>
    )
}

export default CategoriesIndexPage;
