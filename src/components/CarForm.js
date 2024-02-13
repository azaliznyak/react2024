import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";

const CarForm = ({setTrigger, carForUpdate,setCarForUpdate}) => {

    const {register,reset,handleSubmit, setValue, formState:{errors,isValid}}=useForm({mode:'all'});

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
            <input type="text" placeholder={'brand'} {...register('brand',{
                pattern:{
                    value:/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                    message:'min 1 max 20 characters'
                }
            })}/>

            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber:true,
                min:{value:1990, message:'min 1990'},
                max:{value:new Date().getFullYear(), message:'max currant year'}
            })}/>

            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber:true,
                min:{value:1, message:'min 1'},
                max:{value:1000000,message:'max 1000000'}
            })}/>
            <button disabled={!isValid}>{carForUpdate?'update':'save'}</button>
            {errors.brand&&<div>{errors.brand.message}</div>}
            {errors.year&&<div>{errors.year.message}</div>}
            {errors.price&&<div>{errors.price.message}</div>}
        </form>
    );
};

export {CarForm};