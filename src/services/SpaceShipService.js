import {axiosService} from "./axiosService";

const spaceShipService = {
    getAll: () => axiosService.get('/v3/launches/')
}

export {
    spaceShipService
}