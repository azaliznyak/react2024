import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService={
    getAll:()=>apiService.get(urls.comments.base),
    getById:(id)=>apiService.get(urls.comments.byId(id)),
    getPostById:(commentId)=>apiService.get(urls.comments.getPostsByCommentsId(commentId))
}

export {
    commentsService
}