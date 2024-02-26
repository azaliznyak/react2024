import React, {useEffect, useState} from 'react';
import {characterService} from "../../servers";
import {useParams} from "react-router-dom";
import {Character} from "./Character";

const Characters = () => {
    const[characters, setCharacters]=useState({results:[]});
    const {ids}=useParams()
    useEffect(()=>{
        characterService.getById(ids).then(({data})=>setCharacters(data))
    },[ids])


    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
            
        </div>
    );
};

export {Characters};