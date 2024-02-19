import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const userService={
    getAll:()=>apiService.get(urls.users.base),
    getById:(id)=>apiService.get(urls.users.byId(id)),
    getPostById:(id)=>apiService.get(urls.users.getPostByUserId(id))
}

export {
    userService
}