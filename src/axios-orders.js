import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-app-5f065.firebaseio.com/'
});

export default instance;