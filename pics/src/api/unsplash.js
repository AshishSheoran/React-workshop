import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID E2jhPhvvFlioSNW_mmbccE5XOzvRx_w36QDUufkajGE',
    },
});
