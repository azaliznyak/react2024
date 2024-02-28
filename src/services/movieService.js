import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const movieService={
    getAll:()=>apiService.get(urls.movies.base),
    getById:(id)=>apiService.get(urls.movies.byId(id))
}

export {
    movieService
}