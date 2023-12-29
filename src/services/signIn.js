import api from "./api";

export const signInApi = async (signInData) => {
    let response = '';
    await api.post('/sign-in', signInData, { headers: { "Content-Type": "application/json" } })
        .then(res => response = res)
        .catch(e => console.log('Sign-in Error: ' + e))
    return response;
};