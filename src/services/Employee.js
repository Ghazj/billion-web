import api from "./api";

export const Employee = (token) => api.get('/api/Employee', token);
