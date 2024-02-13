import React from 'react';
import {carService} from "../services/carService";

const Car = ({car, setCarForUpdate,setTrigger}) => {
    const{id,brand,year,price}=car
    const deleteCar = async () => {
      await carService.deleteById(id)
        setTrigger(prev=>!prev)
    }
    return (
        <div>
            <div>{id}- {brand}</div>
            <div>{year}</div>
            <div>{price}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>

        </div>
    );
};

export {Car};