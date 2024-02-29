import React from 'react';
import css from './Movie.module.css'
import {StarsRating} from "../StarsRating";
import StarRatings from "react-star-ratings";

const MovieListCard = ({movie, vote_average}) => {
    const {title, poster_path}=movie
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    console.log(title);
    return (
        <div className={css.Movie}>
            <div className={css.MovieTitle}>{title}</div>
            <img className={css.MovieImg} src={`${baseImageUrl}${poster_path}`} alt={title} />
            <div className={css.Stars}>

            <StarsRating vote_average={vote_average} movie={movie}/>
            </div>

        </div>
    );
};

export {MovieListCard};