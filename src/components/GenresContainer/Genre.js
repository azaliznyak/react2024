import React from 'react';
import css from './Genre.module.css'
// import {Badge, Button} from "reactstrap";
import {BadgeMark, Badge} from "@mui/material";


const Genre = ({genre}) => {

    const {id, name}=genre
    return (
        <div className={css.Genre}>
            <div className={css.Budge} > <Badge badgeContent={name} color="primary"></Badge></div>








        </div>
    );
};

export {Genre};