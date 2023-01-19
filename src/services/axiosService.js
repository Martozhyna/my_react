import axios from "axios";

const baseURL = 'https://api.spacexdata.com'

const axiosService = axios.create({baseURL});

export {
    axiosService
}