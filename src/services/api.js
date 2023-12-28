import { create } from 'apisauce';

const api = create({
    baseURL: 'http://localhost:3000/',
    headers: {
        "Accept": "application/jason",
        "Content-Type": "application/json"
    }
})

export default api;