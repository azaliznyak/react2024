import React, {useEffect, useState} from 'react';
import {characterService} from "../../servers";
import {useNavigate, useParams} from "react-router-dom";
import {Character} from "./Character";
import {useAppContext} from "../../hooks/useAppContext";

const Characters = () => {
    const[characters, setCharacters]=useState([]);
    const {ids}=useParams();
    const navigate=useNavigate();
    const[, setName]=useAppContext()
    const back = () => {
      navigate(-1)
        setName(null)
    }
    useEffect(()=>{
        characterService.getById(ids).then(({data})=>setCharacters(data))
    },[ids])


    return (
        <div>
            <button onClick={back}>back</button>
            {characters.map(character=><Character key={character.id} character={character}/>)}

            
        </div>
    );
};

export {Characters};