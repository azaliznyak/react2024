import React from 'react';

import {useEffect, useState} from 'react';
import {User} from "../User/User";
import {userService} from "../../services/userService";
import {UserDetails} from "../UserDetails/UserDetails";




const Users = () => {

    const [users, setUsers]=useState([]);
    const[userDetails, setUserDetails]=useState(null)




    useEffect(()=>{
       userService.getAll().then(({data})=>setUsers(data))
    },[])

    const getCurrentUser = (user) => {
      setUserDetails(user)
    }




    return (
        <div>
            {users.map(user=> <User id={user.id} user={user} getCurrentUser={getCurrentUser()} />)}
            <hr/>
            {userDetails && <UserDetails userDetails={userDetails}/>}


        </div>
    );
};

export {Users};