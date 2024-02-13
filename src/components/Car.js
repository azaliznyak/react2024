import React from 'react';

const Car = ({car, setCarForUpdate}) => {
    const{id,brand,year,price}=car
    return (
        <div>
            <div>{id}- {brand}</div>
            <div>{year}</div>
            <div>{price}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button>delete</button>

        </div>
    );
};

export {Car};