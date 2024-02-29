import React, {useEffect, useState} from 'react';
import {movieService} from "../../services";
import {useParams} from "react-router-dom";
import css from './MovieInfo.module.css'
import {StarsRating} from "../StarsRating";
import StarRatings from "react-star-ratings";


const MovieInfo = ({info}) => {
    const {id,title, poster_path, overview, backdrop_path, release_date,vote_average}=info;

    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';



    return (
        <div className={css.MovieInfo}>
           <div>title:{title}</div>
            <img src={`${baseImageUrl}${poster_path}`} alt={title}/>
            <div>Rating <StarRatings rating={vote_average}
                                     starRatedColor="yellow"
                                     starDimension="15px"
                                     starSpacing="2px"
                                     numberOfStars={10}
            /> </div>
            <div>{}</div>
            <div>Release date:{release_date}</div>
            <p>Overview:
                {overview}
            </p>

            
        </div>
    );
};

export {MovieInfo};