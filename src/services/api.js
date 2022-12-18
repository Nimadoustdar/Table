
// // const BASE_URL = 'https://639d89b81ec9c6657bac6730.mockapi.io/api/v1/users';
// const BASE_URL = 'https://639ef8747aaf11ceb88f363c.mockapi.io/users';
// const getData = async () => {
//     const res = await fetch(`${BASE_URL}`);
//     const data = await res.json()
//     console.log("data",data)
//     return data
// }
// export { getData }
import axios from 'axios';
const BASE_URL = 'https://639ef8747aaf11ceb88f363c.mockapi.io/users';

const getData = async () => {
    const res = await axios.get(`${BASE_URL}`);
    return res.data
}
export { getData }