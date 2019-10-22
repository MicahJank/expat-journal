import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://pt11expat.herokuapp.com/api', // may need to change the baseURL depending on what the backend link for registering and logging in is
        headers: {
            Authorization: token
        }
    })
}