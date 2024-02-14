import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";

const CarForm = ({setTrigger, carForUpdate,setCarForUpdate}) => {

    const {register,reset,handleSubmit, setValue, formState:{errors,isValid}}=useForm({mode:'all', resolver:joiResolver(carValidator)});

    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev=>!prev)
        reset()

    }

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand',carForUpdate.brand, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
        }
    },[carForUpdate]);

    const update= async (car)=>{
        await carService.updateById(carForUpdate.id,car)
        setTrigger(prev=>!prev);
        setCarForUpdate(null);
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate? update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>

            <input type="text" placeholder={'year'} {...register('year', { valueAsNumber:true })}/>

            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <button disabled={!isValid}>{carForUpdate?'update':'save'}</button>
            {errors.brand&&<div>{errors.brand.message}</div>}
            {errors.year&&<div>{errors.year.message}</div>}
            {errors.price&&<div>{errors.price.message}</div>}
        </form>
    );
};

export {CarForm};