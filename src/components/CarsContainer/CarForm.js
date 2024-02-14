import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";

const CarForm = ({changeTrigger, carForUpdate, setCarForUpdate}) => {

    const{handleSubmit,reset,register,formState:{errors,isValid}, setValue}=useForm({mode:'all', resolver:joiResolver(carValidator)});

    useEffect(()=>{
        if (carForUpdate){
                setValue('brand', carForUpdate.brand, {shouldValidate:true})
                setValue('year',carForUpdate.year, {shouldValidate:true})
                setValue('price', carForUpdate.price, {shouldValidate:true})
        }
    },[carForUpdate, setValue])


    const save = async (car) => {
      await carService.create(car);
      changeTrigger();
      reset()
    }

    const update= async (car)=>{
        await carService.updateById(carForUpdate.id,car)
        changeTrigger()
        setCarForUpdate(null);
        reset()

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <button disabled={!isValid}>{carForUpdate?'update':'save'}</button>
            {errors.brand&&<div>{errors.brand.message}</div>}
            {errors.year&&<div>{errors.year.message}</div>}
            {errors.price&&<div>{errors.price.message}</div>}

        </form>
    );
};

export {CarForm};