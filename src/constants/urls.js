const baseURL='https://api.themoviedb.org/3';

const movies='/discover/movie'
const genres='/genre/movie/list'
const movieInfo='/movie'
const search='/search/movie'


const urls={
    movies:{
        base:movies,
        byId:(id)=>`${movies}/${id}`,
        moviesByGenre:(genreId)=>`${movies}?with_genres=${genreId}&`
    },
    movieInfo:{
        byId:(id)=>`${movieInfo}/${id}`
    },
    genres:{
        base:genres,
        byId:(id)=>`${genres}/${id}`
    },
    search:{
        base:search
    }
}


export {
    baseURL, urls
}