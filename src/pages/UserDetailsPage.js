import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {userService} from "../services/userService";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const{id}=useParams()
    const [userDetails, setUserDetails]=useState(null);
    useEffect(()=>{
        userService.getById(id).then(({data})=>setUserDetails(data))
    },[id])
    return (
        <div>
            {userDetails &&<UserDetails userDetails={userDetails}/>}
            <hr/>
            <Outlet/>


        </div>
    );
};

export {UserDetailsPage};