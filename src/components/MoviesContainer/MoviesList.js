import React, {useEffect, useState} from 'react';
import {movieService} from "../../services";
import {MovieListCard} from "./MovieListCard";
import css from './MoviesList.module.css'

const MoviesList = () => {
    const [movies, setMovies]=useState({results:[]});

    console.log(movies)
    useEffect(()=>{
        movieService.getAll().then(({data})=>setMovies(data))
    },[])



    return (
        <div className={css.MoviesList}>
            <div className={css.MovieRow}>
            {movies.results.map(movie=><MovieListCard key={movie.id} movie={movie}/>)}

            </div>

        </div>
    );
};

export {MoviesList};