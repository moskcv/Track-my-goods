import axios from 'axios'

export const fetchCustomers = async ({ queryKey }) => {
    const [_, params] = queryKey;

    return await axios.get('/api/v1/customers', {
        params
    });
}

export const fetchCustomer = async ({ queryKey }) => {
    const [_, id] = queryKey;

    return await axios.get(`/api/v1/customers/${id}`);
}

export const createCustomer = async (data) => {
    return await axios.post(`/api/v1/customers`, data);
}

export const updateCustomer = async (data) => {
    return await axios.patch(`/api/v1/customers/${data.id}`, data);
}

export const deleteCustomer = async (id) => {
    return await axios.delete(`/api/v1/customers/${id}`);
}
