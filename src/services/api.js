import { create } from 'apisauce';

const api = create({
    baseURL: 'http://localhost:3000/',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
})

export default api;