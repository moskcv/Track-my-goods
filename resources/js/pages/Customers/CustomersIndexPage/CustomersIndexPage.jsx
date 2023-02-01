import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from '@heroicons/react/24/outline';
import { CUSTOMER_STATUSES, PACKAGE_TYPES, PAYMENTS_TYPES } from '../../../helpers/constants';
import { Pagination, Panel, Table } from '../../../ui';
import { deleteCustomer, fetchCustomers } from '../../../services/customers';

const CustomersIndexPage = () => {
    const queryClient = useQueryClient();
    const [queryParams, setQueryParams] = useState({
        page: 1,
        sort: 'asc',
        orderBy: 'created_at',
    })
    const { data } = useQuery({ queryKey: ['customers', {...queryParams}], queryFn: fetchCustomers });

    const { mutate: remove } = useMutation({
        mutationFn: deleteCustomer,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['customers'] });
        }
    })

    const handleOrder = columnName => {
        if (columnName === queryParams.orderBy) {
            const sort = queryParams.sort === 'asc' ? 'desc' : 'asc';
            setQueryParams({...queryParams, sort});

            return
        }

        const sort = queryParams.sort === 'asc' ? 'desc' : 'asc';
        setQueryParams({...queryParams, sort, orderBy: columnName});
    }

    return (
        <Panel>
            <Panel.Header>Клієнти</Panel.Header>
            <Panel.Body>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell onClick={() => handleOrder('name')}>Назва компанії/ФОП</Table.HeaderCell>
                            <Table.HeaderCell align='center'>Пакет</Table.HeaderCell>
                            <Table.HeaderCell align='center'>Оплата</Table.HeaderCell>
                            <Table.HeaderCell align='center'>Статус</Table.HeaderCell>
                            <Table.HeaderCell>Оплачено</Table.HeaderCell>
                            <Table.HeaderCell>Наступна оплата</Table.HeaderCell>
                            <Table.HeaderCell align='right'>...</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data?.data.data.map(customer => (
                            <Table.Row key={customer.id}>
                                <Table.Cell><Link to={`/customers/${customer.id}/edit`}>{customer.name}</Link></Table.Cell>
                                <Table.Cell align='center'>{PACKAGE_TYPES[customer.package_type]}</Table.Cell>
                                <Table.Cell align='center'>{PAYMENTS_TYPES[customer.pricing_plan]}</Table.Cell>
                                <Table.Cell align='center'>{CUSTOMER_STATUSES[customer.status]}</Table.Cell>
                                <Table.Cell align='center'>{customer.payed_at}</Table.Cell>
                                <Table.Cell align='center'>{customer.next_payment_at}</Table.Cell>
                                <Table.Cell align='right'>
                                    <button onClick={() => remove(customer.id)}><TrashIcon className='w-6 h-6' /></button>
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

export default CustomersIndexPage;
