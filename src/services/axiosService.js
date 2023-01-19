import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com'

const axiosService = axios.create({baseURL})

export {
    axiosService
}