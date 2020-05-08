import axios from "axios";

export const fetchAll = async (url, params, method = "get") => {
    return await axios({
        method, url: `http://localhost:3500${url}`, params
    })
}

export const fetchOne = async (url, params = {}, method = "get") => {
    return await axios({
        method, url: `http://localhost:3500${url}`, params
    })
}


export const save = async (url, data, method = "post") => {
    return await axios({
        method, url: `http://localhost:3500${url}`, data,
        headers: {
            "content-type": "application/json"
        }
    })
}