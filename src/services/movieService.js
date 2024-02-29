import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const movieService={
    getAll:(page)=>apiService.get(urls.movies.base, {params:{page}}),
    getById:(id)=>apiService.get(urls.movies.byId(id)),
    getByIdInfo:(id)=>apiService.get(urls.movieInfo.byId(id))
}

export {
    movieService
}