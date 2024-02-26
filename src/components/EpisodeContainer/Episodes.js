import React, {useEffect, useState} from 'react';
import {episodeService} from "../../servers";
import {Episode} from "./Episode";
import css from './Episodes.module.css'
import {useNavigate} from "react-router-dom";

const Episodes = () => {
    const [episodes, setEpisodes]=useState({results:[]});
    const navigate=useNavigate()

    useEffect(()=>{
        episodeService.getAll().then(({data})=>setEpisodes(data))
    },[]);
    const prev = () => {
      navigate(-1)
    };

    const next = () => {
      navigate(+1)
    }


    return (
        <div>
            <div className={css.EpisodesTable}>
            {episodes.results.map(episode=><Episode key={episode.id} episode={episode}/>)}

            </div>
            <div>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>

            
        </div>
    );
};

export {Episodes};