const baseURL='https://api.themoviedb.org/3';

const movies='/discover/movie'
const genres='/genre/movie/list'
const movieInfo='/movie'

const urls={
    movies:{
        base:movies,
        byId:(id)=>`${movies}/${id}`
    },
    movieInfo:{
        byId:(id)=>`${movieInfo}/${id}`
    },
    genres:{
        base:genres,
        byId:(id)=>`${genres}/${id}`
    }
}


export {
    baseURL, urls
}