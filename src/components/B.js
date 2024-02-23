import React, {useContext} from 'react';
import {C} from "./C";
import {Context} from "../App";
import {useAppContext} from "../hooks/useAppContext";

const B = () => {
    const value=useAppContext()
    return (
        <div>
            <h1>B:{value}</h1>
            <C/>

        </div>
    );
};

export {B};