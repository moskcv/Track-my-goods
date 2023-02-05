import React from 'react'
import { Button, Form } from '../../../ui';

const AttributeForm = ({ onSubmit, attribute, setAttribute }) => (
    <Form onSubmit={onSubmit}>
        <Form.Input
            label='Назва'
            required
            value={attribute.title || ''}
            onChange={e => setAttribute({...attribute, title: e.target.value})}
        />
        <Button
            type='submit'
            content='Зберегти'
        />
    </Form>
);

export default AttributeForm;
