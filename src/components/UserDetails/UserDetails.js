import React from 'react';

const UserDetails = ({userDetails}) => {
    const {id,name,username,email}=userDetails
    return (
        <div>
            <div>{id}- {name}</div>
            <div>{username}</div>
            <div>{email}</div>

            
        </div>
    );
};

export {UserDetails};