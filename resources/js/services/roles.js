import axios from 'axios';

export const fetchRoles = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, params] = queryKey;

    return await axios.get('/api/v1/roles', {
        params
    });
}

export const createRole = async (data) => {
    return await axios.post(`/api/v1/roles`, data);
}

export const fetchRolesOptions = async () => {
    return await axios.get('/api/v1/roles/options');
}

export const fetchRole = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, id] = queryKey;

    return await axios.get(`/api/v1/roles/${id}`);
}

export const updateRole = async (data) => {
    return await axios.patch(`/api/v1/roles/${data.id}`, data);
}

export const deleteRoles = async (id) => {
    return await axios.delete(`/api/v1/roles/${id}`);
}
