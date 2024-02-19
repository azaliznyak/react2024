import React from 'react';
import {Users} from "../components/UsersContainer/Users";
import {Outlet, useLoaderData} from "react-router-dom";

const UsersPage = () => {
    const {data}=useLoaderData()
    return (
        <div>
            <Outlet/>
            <hr/>
            <Users users={data}/>
            
        </div>
    );
};

export {UsersPage};