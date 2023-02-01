import axios from 'axios'

export const fetchPermissions = async () => {
    return axios.get('/api/v1/permissions');
}
