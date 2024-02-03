import React from 'react';

const Character = ({character}) => {
    const {name,status,species,img,genre}=character
    return (
        <div>
            <h1>{name}</h1>
            <h4>{status} - {species}</h4>
            <h5>{genre}</h5>
            <img src={img} alt={name}/>
            
        </div>
    );
};

export {Character};