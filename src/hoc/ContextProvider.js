import React, {createContext, useState} from 'react';


const Context=createContext(null)
const ContextProvider = ({children}) => {
    const [trigger, setTrigger] = useState(null);
    const changeTrigger =()=> {
        setTrigger(prevState=>!prevState)
    }

    return (
        <Context.Provider value={{trigger,changeTrigger}} >

            {children}

        </Context.Provider>
    );
};

export {ContextProvider, Context};