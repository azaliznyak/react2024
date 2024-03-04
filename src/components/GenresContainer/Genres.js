import React, {useEffect, useState} from 'react';

import {genreService, movieService} from "../../services";
import {Genre} from "./Genre";


const Genres = () => {
    const [genres, setGenres]=useState({genres:[]});

    useEffect(()=>{
        genreService.getAll().then(({data})=>setGenres(data))
    },[])

    return (
        <div>
            {genres.genres.map(genre=><Genre key={genre.id} genre={genre} />)}

        </div>
    );
};

export {Genres};