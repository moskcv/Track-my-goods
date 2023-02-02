import axios from 'axios'

export const getAuthUser = async () => {
    return await axios.get('/api/user');
}

export const fetchUsers = async ({ queryKey }) => {
    const [_, params] = queryKey;

    return await axios.get('/api/v1/users', {
        params
    });
}

export const fetchUser = async ({ queryKey }) => {
    const [_, id] = queryKey;

    return await axios.get(`/api/v1/users/${id}`);
}

export const createUser = async (data) => {
    return await axios.post('/api/v1/users', data);
}

export const updateUser = async (data) => {
    return await axios.patch(`/api/v1/users/${data.id}`, data);
}

export const deleteUser = async (id) => {
    return await axios.delete(`/api/v1/users/${id}`);
}
