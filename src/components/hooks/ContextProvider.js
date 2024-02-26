import React, {createContext} from 'react';

const Context=createContext(null)
const ContextProvider = ({children}) => {

    return (
        <Context.Provider value={''}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider};