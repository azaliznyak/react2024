import Joi from "joi";

const carValidator=Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        'string.pattern.base':'only letters man 0 max 20'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required(),
    price:Joi.number().min(0).max(1000000).required()
})

export {carValidator}