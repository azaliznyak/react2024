import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Genre.module.css'
import {BadgeMark, Badge} from "@mui/material";


const Genre = ({genre}) => {
    const navigate= useNavigate()



    const {id, name}=genre
    return (
        <div className={css.Genre}>
            <span className={css.Budge} onClick={()=>navigate(`/genres/${id}`)} > <Badge badgeContent={name} color="primary"></Badge></span>



        </div>
    );
};

export {Genre};