const baseURL='https://api.themoviedb.org/3';

const movies='/discover/movie'
const genres='';

const urls={
    movies:{
        base:movies,
        byId:(id)=>`${movies}/${id}`
    }
}


export {
    baseURL, urls
}