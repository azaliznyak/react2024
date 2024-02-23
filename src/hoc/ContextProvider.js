import React, {createContext} from 'react';

const Context=createContext(null)
const ContextProvider = ({children}) => {
    return (
        <div>
            <Context.Provider value={'hahha'}>
                {children}
            </Context.Provider>

        </div>
    );
};

export {
    ContextProvider,
    Context
};