import axios from 'axios'

export const fetchStorages = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, params] = queryKey;

    return await axios.get('/api/v1/storages', {
        params
    });
}

export const fetchStorage = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, id] = queryKey;

    return await axios.get(`/api/v1/storages/${id}`);
}

export const fetchStoragesOptions = async () => {
    return await axios.get('/api/v1/storages/options');
}

export const createStorage = async (data) => {
    return await axios.post(`/api/v1/storages`, data);
}

export const updateStorage = async (data) => {
    return await axios.patch(`/api/v1/storages/${data.id}`, data);
}

export const deleteStorage = async (id) => {
    return await axios.delete(`/api/v1/storages/${id}`);
}
