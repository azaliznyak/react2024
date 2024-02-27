import React, {useEffect, useState} from 'react';
import {episodeService} from "../../servers";
import {Episode} from "./Episode";
import css from './Episodes.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {usePageQuery} from "../../hooks";

const Episodes = () => {
    const [episodes, setEpisodes]=useState({prev:null, next:null,results:[]});
    const navigate=useNavigate();
    const {page,prevPage, nextPage}=usePageQuery()



    useEffect(()=>{
        episodeService.getAll(page).then(({data})=>setEpisodes(()=>{
            const {info:{prev,next}, results}=data;
            return {
                next,
                prev,
                results
            }

        }))
    },[page]);



    return (
        <div>
            <div className={css.EpisodesTable}>
            {episodes.results.map(episode=><Episode key={episode.id} episode={episode}/>)}

            </div>
            <div className={css.EpisodeButton}>
                <button disabled={!episodes.prev} onClick={prevPage}>prev</button>
                <button disabled={!episodes.next} onClick={nextPage}>next</button>
            </div>

            
        </div>
    );
};

export {Episodes};