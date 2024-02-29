import React, {useEffect, useState} from 'react';
import {MovieInfo} from "../components";
import {useParams} from "react-router-dom";
import {movieService} from "../services";

const MoviesInfoPage = () => {
    const [info,setInfo]=useState([]);
    const {id}=useParams()

    useEffect(()=>{
       movieService.getByIdInfo(id).then(({data})=>setInfo(data))
    },[id])
    return (
        <div>
            {info && <MovieInfo info={info}/>}
            
        </div>
    );
};

export {MoviesInfoPage};