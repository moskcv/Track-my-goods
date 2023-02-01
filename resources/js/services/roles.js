import axios from 'axios';

export const fetchRoles = async ({ queryKey }) => {
    const [_, params] = queryKey;

    return await axios.get('/api/v1/roles', {
        params
    });
}

export const createRole = async (data) => {
    return await axios.post(`/api/v1/roles`, data);
}

export const fetchRole = async ({ queryKey }) => {
    const [_, id] = queryKey;

    return await axios.get(`/api/v1/roles/${id}`);
}

export const updateRole = async (data) => {
    return await axios.patch(`/api/v1/roles/${data.id}`, data);
}
