import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../services/userService";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const{id}=useParams();
    const {state}=useLocation()
    const[userDetails,setUserDetails]=useState(null);
    useEffect(()=>{
        if (state?.user){                                     //якщо є state подивись на user якщо немає то навіть не дивись
            setUserDetails(state.user)
        }else {
            userService.getById(id).then(({data})=>setUserDetails(data))
        }

    },[id])

    return (
        <div>
            {userDetails &&<UserDetails userDetails={userDetails}/>}
            
        </div>
    );
};

export {UserDetailsPage};