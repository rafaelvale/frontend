import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nodejs-backend-omnistack.herokuapp.com'

});

export default api;