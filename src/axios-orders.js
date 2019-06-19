import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://react-my-burger-cf3c7.firebaseio.com/'
});

export default instance;