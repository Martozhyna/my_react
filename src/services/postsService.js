import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService = {
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {
    postsService
}