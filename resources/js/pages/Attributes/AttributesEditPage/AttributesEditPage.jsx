import React, { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { fetchAttribute, updateAttribute } from '../../../services/attributes'
import { Panel } from '../../../ui'
import AttributeForm from '../components/AttributeForm'

const AttributesEditPage = () => {
    const { id } = useParams();
    const [attribute, setAttribute] = useState({});

    useQuery({
        queryKey: ['attribute', id],
        queryFn: fetchAttribute,
        onSuccess: (data) => {
            setAttribute(data?.data?.data);
        }
    })

    const { mutate: update } = useMutation({
        mutationFn: updateAttribute
    })

    return (
        <Panel>
            <Panel.Header>{attribute?.title}</Panel.Header>
            <Panel.Body>
                <AttributeForm
                    onSubmit={() => update({...attribute})}
                    attribute={attribute}
                    setAttribute={setAttribute}
                />
            </Panel.Body>
        </Panel>
    )
}

export default AttributesEditPage;
