import React, {createContext, useEffect, useState} from 'react';
import {movieService} from "../services";

const Context=createContext(null)
const ContextProvider = ({children}) => {
    const [voteAverage, setVoteAverage] = useState(null)

    return (
        <Context.Provider value={{voteAverage, setVoteAverage}}>

            {children}

        </Context.Provider>
    );
};

export {ContextProvider, Context};