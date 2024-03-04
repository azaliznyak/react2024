import React from 'react';

import {useNavigate} from "react-router-dom";

import {StarsRating} from "../StarsRating";
import css from './MoviesByGenre.module.css'

const MoviesByGenre = ({movie, vote_average}) => {
    const{ title,poster_path, id}=movie;
    const navigate=useNavigate()
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';


    return (
        <div className={css.Movie}>
            <div className={css.MovieTitle}>{title}</div>
            <img className={css.MovieImg} onClick={()=>navigate(`/movie/${id}`)} src={`${baseImageUrl}${poster_path}`} alt={title} />
            <div className={css.Stars}>

                <StarsRating vote_average={vote_average} movie={movie} />
            </div>

        </div>
    );
};

export {MoviesByGenre};