import React from 'react';
import {carService} from "../../services/carService";

const Car = ({car, setCarForUpdate, changeTrigger}) => {
    const{id,brand,year,price}=car

    const deleteById = async () => {
      await carService.deleteById(id)
        changeTrigger()
    }


    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteById}>delete</button>

        </div>
    );
};

export {Car};