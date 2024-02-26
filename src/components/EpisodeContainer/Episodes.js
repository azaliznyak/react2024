import React, {useEffect, useState} from 'react';
import {episodeService} from "../../servers";
import {Episode} from "./Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const [episodes, setEpisodes]=useState({results:[]});
    useEffect(()=>{
        episodeService.getAll().then(({data})=>setEpisodes(data))
    },[])

    return (
        <div>
            <div className={css.EpisodesTable}>
            {episodes.results.map(episode=><Episode key={episode.id} episode={episode}/>)}

            </div>

            
        </div>
    );
};

export {Episodes};