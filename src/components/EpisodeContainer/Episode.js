import React, {useEffect, useState} from 'react';
import css from './Episode.module.css'
import {Navigate, useNavigate} from "react-router-dom";

const Episode = ({episode}) => {
    const {id,name, episode:chapter, characters}=episode;
    const navigate=useNavigate();


    const toCharacters = () => {

     navigate(`/characters/${id}`)
    }
    return (
        <table className={css.Episode} onClick={toCharacters}>


            <tbody >
            <tr>
                <td>ID:{id}</td>
                <td>Name:{name}</td>
                <td>Chapter:{chapter}</td>

            </tr>

            </tbody>



        </table>
    );
};

export {Episode};