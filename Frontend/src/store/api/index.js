import axios from "axios";

const apiUrl = 'https://my-tune.herokuapp.com/';


export const callServer = (url, method = 'get', data = undefined,headers=undefined) => {
    return axios({
        url: apiUrl+url,
        method: method,
        headers:headers,
        data: data,
    })
};