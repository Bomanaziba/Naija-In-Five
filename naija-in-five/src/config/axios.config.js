import axios from "axios";


const instance = axios.create({
    // .. where we make our configurations
        baseURL: 'http://localhost:5000'
    });

export default instance;

//export default function() {

    /* const ax = axios.create()

    ax.defaults.baseURL = window.configs.baseURL;

    ax.interceptors.request.use(request => {
        console.log(request);
        // Edit request config
        return request;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

    ax.interceptors.response.use(response => {
        console.log(response);
        // Edit response config
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    }); */
//}
