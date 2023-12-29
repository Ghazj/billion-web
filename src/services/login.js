import api from "./api";

export const loginApi = async (loginData) => await api.post('/login', loginData);
