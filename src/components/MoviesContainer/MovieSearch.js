import React from 'react';
import css from './movieSearch.module.css'

import {StarsRating} from "../StarsRating";
import {useNavigate} from "react-router-dom";

const MovieSearch = ({results}) => {
    const navigate=useNavigate();
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

    return (
        <div  >

            <div className={css.MoviesList}>
                <div className={css.MovieRow}>

                {results.map(movie => (

                    <div  key={movie.id} className={css.Movie}>
                        <div className={css.MovieTitle}>{movie.title}</div>
                        <img className={css.MovieImg} onClick={()=>navigate(`/movie/${movie.id}`)} src={`${baseImageUrl}${movie.poster_path}`} alt={movie.title} />
                        <div className={css.Stars}>

                            <StarsRating vote_average={movie.vote_average} movie={movie} />
                        </div>

                    </div>
                ))}
                </div>
            </div>

        </div>
    );
};

export {MovieSearch};