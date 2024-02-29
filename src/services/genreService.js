import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService={
    getAll:()=>apiService.get(urls.genres.base),
    getById:(id)=>apiService.get(urls.genres.byId(id))
}

export {
    genreService
}