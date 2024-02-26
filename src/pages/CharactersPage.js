import React, {useEffect, useState} from 'react';
import {Characters} from "../components";
import {useParams} from "react-router-dom";
import {characterService} from "../servers";

const CharactersPage = () => {

    return (
        <div>
           <Characters/>
            
        </div>
    );
};

export {CharactersPage};