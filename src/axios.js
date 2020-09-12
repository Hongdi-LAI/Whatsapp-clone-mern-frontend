import axios from 'axios'

const instance = axios.create({
    //introduce backend deployed api
    baseURL: 'https://mern-whatsapp-backend.herokuapp.com',
});

export default instance;
