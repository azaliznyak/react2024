import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentService={
    getAll:()=>apiService.get(urls.comments.base),
    getById:(postId)=>apiService.get(urls.comments.base, {params:{postId}})
}

export {
    commentService
}