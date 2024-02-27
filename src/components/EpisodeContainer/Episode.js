import React from 'react';
import css from './Episode.module.css'
import { useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";


const Episode = ({episode}) => {
    const {id,name, episode:chapter, characters}=episode;
    const navigate=useNavigate();
    const [, setName]=useAppContext()


    const toCharacters = () => {
        const ids=characters.map(character=>character.split('/').slice(-1)[0]).join(',');
        setName(name)

     navigate(`/characters/${ids}`)
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