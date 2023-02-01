import axios from 'axios'

export const getAuthUser = () => {
    return axios.get('/api/user');
}
