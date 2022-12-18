
const BASE_URL = 'https://639d89b81ec9c6657bac6730.mockapi.io/api/v1/users';

const getData = async () => {
    const res = await fetch(`${BASE_URL}`);
    const data = await res.json()
    return data

}


export { getData }