import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService={
    getAll:(page)=>apiService.get(urls.movies.base, {params:{page}}),
    getById:(id)=>apiService.get(urls.movies.byId(id)),
    getByIdInfo:(id)=>apiService.get(urls.movieInfo.byId(id)),
    getByGenre: async (genreId, page) => {
        try {
            const response = await apiService.get(urls.movies.moviesByGenre(genreId), { params: { page } });
            if (!response) {
                throw new Error('Failed to fetch movies by genre');
            }
            const dataI = await response.data;
            return dataI;
        } catch (error) {
            console.error('Error fetching movies by genre:', error);
            return null;
        }
    },
    getTotalPagesByGenre: async (genreId) => {
        try {
            const response = await apiService.get(urls.movies.moviesByGenre(genreId));
            if (!response) {
                throw new Error('Failed to fetch total pages by genre');
            }
            const dataI = await response.data;
            return dataI.total_pages;
        } catch (error) {
            console.error('Error fetching total pages by genre:', error);
            return null;
        }
    }
}

export {
    movieService
}



// (genreId, page) => apiService.get(urls.movies.moviesByGenre(genreId), { params: { page } })