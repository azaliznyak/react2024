import React, {useState} from 'react';

import {useState, useEffect} from 'react'



const Users = () => {

    const [users, setUsers]=useState([])



    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
    },[])




    return (
        <div>
            {users.map(user=> <User id={user.id} user={user}/>)}


        </div>
    );
};

export {Users};