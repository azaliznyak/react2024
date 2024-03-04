import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService={
    searchMovies: async (query, page = 1) => {
        try {
            const response = await apiService.get(urls.search.base, { params: { query, page } });
            if (!response) {
                throw new Error('Failed to fetch movies');
            }
            const data = await response.data;
            return data;
        } catch (error) {
            console.error('Error searching movies:', error);
            return null;
        }
    }
}

export {
    searchService
}