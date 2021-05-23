import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinderbackend123.herokuapp.com",
});

export default instance;