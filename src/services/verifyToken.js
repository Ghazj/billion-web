import api from "./api";

export const verifyTokenApi =  (header) => api.get('/verify', {}, header);