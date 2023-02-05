import axios from 'axios';

export const fetchCategories = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, params] = queryKey;

    return await axios.get('/api/v1/categories', {
        params
    });
}

export const createCategory = async (data) => {
    return await axios.post(`/api/v1/categories`, data);
}

export const fetchCategory = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_, id] = queryKey;

    return await axios.get(`/api/v1/categories/${id}`);
}

export const updateCategory = async (data) => {
    return await axios.patch(`/api/v1/categories/${data.id}`, data);
}

export const deleteCategory = async (id) => {
    return await axios.delete(`/api/v1/categories/${id}`);
}

export const fetchCategoriesOptions = async () => {
    return await axios.get('/api/v1/categories/options');
}
