import {axiosService} from "./axiosService";

const postsService = {
    getAll: () => axiosService.get('/posts'),
    getPostById: (id) => axiosService(`/posts/${id}`)
}

export {postsService};