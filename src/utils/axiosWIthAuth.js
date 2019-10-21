import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://pt11expat.herokuapp.com/api/stories',
        headers: {
            Authorization: token
        }
    })
}