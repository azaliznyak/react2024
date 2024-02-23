import Joi from "joi";

const registerValidator = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z]\w{1,19}$/).required().messages({
        'string.pattern.base': 'first letters then letters, digits,special characters'
    }),
    password: Joi.string().pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/).required().messages({
        'string.pattern.base': 'min 1 digits, min 1 uppercase, min 1 lowercase, min 1 special symbol, from 8 to 20 characters'
    }),
    re_password: Joi.any().equal(Joi.ref('password')).required().messages({
        'any.only': 'passwords do not match'
    })
})

export {
    registerValidator
}