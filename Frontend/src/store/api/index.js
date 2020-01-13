import axios from "axios";

const apiUrl = 'http://localhost:3030';


export const callServer = (url, method = 'get', data = undefined,headers=undefined) => {
    return axios({
        url: apiUrl+url,
        method: method,
        headers:headers,
        data: data,
    })
};