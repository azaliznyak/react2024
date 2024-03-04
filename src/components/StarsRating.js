import React from 'react';
import StarRatings from 'react-star-ratings'



const StarsRating = ({movie,vote_average}) => {
    // const{voteAverage}=useAppContext()


    return (

        <div >

            <StarRatings
                rating={vote_average}
                starRatedColor="yellow"
                starDimension="15px"
                starSpacing="2px"
                numberOfStars={10}
            />

        </div>

    );
};

export {StarsRating};