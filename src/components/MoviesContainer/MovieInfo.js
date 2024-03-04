import React, { useState} from 'react';

import StarRatings from "react-star-ratings";
import css from './MovieInfo.module.css'


const MovieInfo = ({info}) => {
    const {id,title, poster_path, overview, backdrop_path, release_date,vote_average}=info;

const [byGenres, setByGenres]=useState([])


    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';



    return (
        <div className={css.MovieInfo}>
           <div className={css.Title}>{title}</div>
            <div className={css.wrap}>

            <img src={`${baseImageUrl}${poster_path}`} alt={title}/>
                <div className={css.wrap2}>

            <div>Rating <StarRatings rating={vote_average}
                                     starRatedColor="yellow"
                                     starDimension="15px"
                                     starSpacing="2px"
                                     numberOfStars={10}
            /> </div>
            <div>Release date:{release_date}</div>
            <p>Overview:
                {overview}
            </p>
                </div>
            </div>

            
        </div>
    );
};

export {MovieInfo};