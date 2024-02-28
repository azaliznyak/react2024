import React from 'react';
import css from './Movie.module.css'

const MovieListCard = ({movie}) => {
    const {title, poster_path}=movie
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    console.log(title);
    return (
        <div className={css.Movie}>
            <div className={css.MovieTitle}>{title}</div>
            <img className={css.MovieImg} src={`${baseImageUrl}${poster_path}`} alt={title} />

        </div>
    );
};

export {MovieListCard};