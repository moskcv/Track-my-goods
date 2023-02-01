import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRoles } from '../../../services/roles';
import { Panel, Table } from '../../../ui';
import { Link } from 'react-router-dom';

const RolesIndexPage = () => {
    const [queryParams, setQueryParams] = useState({
        page: 1,
        sort: 'asc',
        orderBy: 'created_at',
    })
    const { data } = useQuery({
        queryKey: ['roles', {...queryParams}],
        queryFn: fetchRoles
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
                                <Table.Cell align='right'>...</Table.Cell>
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
