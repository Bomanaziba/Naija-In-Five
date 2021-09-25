import axios from "axios";


const instance = axios.create({
    // .. where we make our configurations
        baseURL: 'naijainfive.pythonanywhere.com'
    });

export default instance;

