import React from 'react';

const Character = ({character}) => {
    const {id, name, image}=character
    return (
        <div>
            <div>Id:{id}</div>
            <div>Name: {name}</div>
            <img src={image} alt={name}/>
            <hr/>

        </div>
    );
};

export {Character};