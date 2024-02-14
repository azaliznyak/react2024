import React, {useEffect, useState} from 'react';
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";

const CarContainer = () => {

    const[cars,setCars]=useState([]);
    const[trigger, setTrigger]=useState(null);
    const[carForUpdate, setCarForUpdate]=useState(null)

    const changeTrigger = () => {
      setTrigger(prev=>!prev)
    }

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[trigger])

    return (
        <div>
            <CarForm changeTrigger={changeTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} changeTrigger={changeTrigger}/>

        </div>
    );
};

export {CarContainer};