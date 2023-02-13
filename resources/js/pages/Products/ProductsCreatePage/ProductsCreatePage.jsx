import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { Form, Panel } from '../../../ui'

const ProductsCreatePage = () => {
    const [product, setProduct] = useState({});

    const { data } = useQuery(['categories-options'])

    return (
        <Panel>
            <Panel.Header>Новий товар</Panel.Header>
            <Panel.Body>
            </Panel.Body>
        </Panel>
    )
}

export default ProductsCreatePage
