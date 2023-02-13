import React from 'react';
import { CUSTOMER_STATUSES, PACKAGE_TYPES, PAYMENTS_TYPES } from '../../../helpers/constants';
import { Button, Form } from '../../../ui';

const CustomerForm = ({ onSubmit, customer, setCustomer }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Input
                label='Назва компанії/ФОП'
                value={customer?.name || ''}
                onChange={e => setCustomer({...customer, name: e.target.value})}
                required
            />
            <Form.Group>
                <Form.Select
                    label='Пакет'
                    value={customer.package_type || 0}
                    onChange={value => setCustomer({...customer, package_type: value})}
                    options={Object.keys(PACKAGE_TYPES).map(type => ({id: type, value: type, text: PACKAGE_TYPES[type]}))}
                />
                <Form.Select
                    label='Оплата'
                    value={customer.pricing_plan || 0}
                    onChange={value => setCustomer({...customer, pricing_plan: value})}
                    options={Object.keys(PAYMENTS_TYPES).map(type => ({value: type, text: PAYMENTS_TYPES[type]}))}
                />
                <Form.Select
                    label='Статус'
                    value={customer.status || 0}
                    onChange={value => setCustomer({...customer, status: value})}
                    options={Object.keys(CUSTOMER_STATUSES).map(type => ({value: type, text: CUSTOMER_STATUSES[type]}))}
                />
            </Form.Group>
            <Form.Group>
                <Form.Input
                    label='Оплачено'
                    type='date'
                    value={customer?.payed_at || ''}
                    onChange={e => setCustomer({...customer, payed_at: e.target.value})}
                />
                <Form.Input
                    label='Наступна оплата'
                    type='date'
                    value={customer?.next_payment_at || ''}
                    onChange={e => setCustomer({...customer, next_payment_at: e.target.value})}
                />
            </Form.Group>
            <Button type='submit' content='Зберегти' />
        </Form>
    )
}

export default CustomerForm;
