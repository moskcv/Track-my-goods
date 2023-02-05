import React from 'react'
import { Button, Form } from '../../../ui'

function StorageForm({ onSubmit, storage, setStorage }) {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Input
                label='Назва'
                required
                value={storage.title || ''}
                onChange={e => setStorage({...storage, title: e.target.value})}
            />
            <Button
                type='submit'
                content='Зберегти'
            />
        </Form>
    )
}

export default StorageForm
