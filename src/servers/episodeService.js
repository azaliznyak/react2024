import {apiService} from "./apiService";
import {urls} from "../constants";

const episodeService={
    getAll:()=>apiService.get(urls.episodes.base),
    getById:(id)=>apiService.get(urls.episodes.byId(id))
}


export {
    episodeService
}