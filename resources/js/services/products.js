import axios from 'axios';

export const fetchProducts = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, params] = queryKey;

    return await axios.get('/api/v1/products', {
        params
    });
}

export const createProduct = async (data) => {
    return await axios.post(`/api/v1/products`, data);
}

export const fetchProductsOptions = async () => {
    return await axios.get('/api/v1/products/options');
}

export const fetchProduct = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, id] = queryKey;

    return await axios.get(`/api/v1/products/${id}`);
}

export const updateProduct = async (data) => {
    return await axios.patch(`/api/v1/products/${data.id}`, data);
}

export const deleteProducts = async (id) => {
    return await axios.delete(`/api/v1/products/${id}`);
}
