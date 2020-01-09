import axios from "axios";

const apiUrl = 'http://localhost:3000';


export const callServer = (url, method = 'get', data = undefined) => {
    return axios({
        url: apiUrl+url,
        method: method,
        data: data,
    })
};