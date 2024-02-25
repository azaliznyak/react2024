import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {authService} from "../services/authService";

const PublicLayout = () => {
    const token=authService.getToken();

    if (token){
        return <Navigate to={'/cars'}/>
    }

    return (
        <div>
            <Outlet/>
            
        </div>
    );
};

export {PublicLayout};