import axios from 'axios';
const BASE_URL = 'https://639d89b81ec9c6657bac6730.mockapi.io/api/v1/users';

const getData = async () => {
    const res = await axios.get(`${BASE_URL}`);
    return res.data
}
export { getData }
