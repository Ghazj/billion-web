import api from "./api";

export const verifyTokenApi =  async (header) => {
    let response = null;
    await api.get('/verify', {}, header)
        .then(res => response = res)
        .catch(err => console.log(err))
        return response;
};