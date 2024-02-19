import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";
import {User} from "./User";

const Users = ({user}) => {                           // user(насправді потрібно написати users) відноситься до louder, у такому випадку не потрібен useState та useEffect
    const[users, setUsers]=useState([]);
    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
            
        </div>
    );
};

export {Users};