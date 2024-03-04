import React from 'react';
import css from './Movie.module.css'
import {StarsRating} from "../StarsRating";

import {useNavigate} from "react-router-dom";

const MovieListCard = ({movie, vote_average, genre_ids}) => {
    const {id, title, poster_path}=movie
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    const navigate=useNavigate()



    return (
        <div className={css.Movie}>
            <div className={css.MovieTitle}>{title}</div>
            <img className={css.MovieImg} onClick={()=>navigate(`/movie/${id}`)} src={`${baseImageUrl}${poster_path}`} alt={title} />
            <div>

            <StarsRating vote_average={vote_average} movie={movie} />
            </div>

        </div>
    );
};

export {MovieListCard};