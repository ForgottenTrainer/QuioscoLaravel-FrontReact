import axios from "axios"

const url = "http://localhost"
const clienteAxios = axios.create({
    baseURL: url,
    headers: {
        'Accept' : 'application/json',
        'X-Requested-With' : 'XMLHttpRequest'
    },

    withCredentials: true
})

export default clienteAxios