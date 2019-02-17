import axios from 'axios';

export const getUsers = () => {
    return axios.get('/users');
};

export const createUser = (data) => {
    return axios.post('/users', {
        firstName: data.firstName,
        lastName: data.lastName
    });
};

export const deleteUser = id => {
    return axios.delete(`/users/${id}`);
};
