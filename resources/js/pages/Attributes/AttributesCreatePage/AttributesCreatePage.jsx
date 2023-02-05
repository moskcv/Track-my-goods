import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createAttribute } from '../../../services/attributes';
import { Panel } from '../../../ui';
import AttributeForm from '../components/AttributeForm';

const AttributesCreatePage = () => {
    const [attribute, setAttribute] = useState({});

    const navigate = useNavigate();

    const { mutate: create } = useMutation({
        mutationFn: createAttribute,
        onSuccess: (data) => {
            navigate(`/attributes/${data?.data?.data?.id}/edit`);
        }
    })

    return (
        <Panel>
            <Panel.Header>Новий атрибут</Panel.Header>
            <Panel.Body>
                <AttributeForm
                    onSubmit={() => create({...attribute})}
                    attribute={attribute}
                    setAttribute={setAttribute}
                />
            </Panel.Body>
        </Panel>
    )
}

export default AttributesCreatePage;
