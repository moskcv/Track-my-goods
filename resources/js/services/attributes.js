import axios from 'axios'

export const fetchAttributes = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, params] = queryKey;

    return await axios.get('/api/v1/attributes', {
        params
    });
}

export const fetchAttribute = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, id] = queryKey;

    return await axios.get(`/api/v1/attributes/${id}`);
}

export const fetchAttributesOptions = async () => {
    return await axios.get('/api/v1/attributes/options');
}

export const createAttribute = async (data) => {
    return await axios.post(`/api/v1/attributes`, data);
}

export const updateAttribute = async (data) => {
    return await axios.patch(`/api/v1/attributes/${data.id}`, data);
}

export const deleteAttribute = async (id) => {
    return await axios.delete(`/api/v1/attributes/${id}`);
}
