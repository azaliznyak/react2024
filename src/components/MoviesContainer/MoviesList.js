import React, { useEffect, useState} from 'react';
import {movieService} from "../../services";
import {MovieListCard} from "./MovieListCard";
import css from './MoviesList.module.css'
import { usePageQuery} from "../../hooks";





const MoviesList = ({}) => {
    const [movies, setMovies] = useState({results: [], total_pages: 0});


    const {page, nextPage, prevPage} = usePageQuery();
    // const {setVoteAverage}=useAppContext()

    console.log(movies)
    useEffect(() => {
        movieService.getAll(page).then(({data}) => {
            setMovies(data);
            // setVoteAverage(data.results.map(movie=>movie.vote_average))
            }
        )
    }, [page])


    return (


        <div >
            <div className={css.MoviesList}>
                <div className={css.MovieRow}>
                    {movies.results.map(movie => <MovieListCard key={movie.id} movie={movie} vote_average={movie.vote_average} genre_ids={movie.genre_ids}/>)}

                </div>

            </div>

            <div className={css.MoviesButton}>
                <button disabled={page == 1} onClick={prevPage}>prev</button>
                <div>{page}</div>
                <button disabled={page === movies.total_pages} onClick={nextPage}>next</button>
            </div>

        </div>


    );
};

export {MoviesList};