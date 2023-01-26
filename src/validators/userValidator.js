import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Z ]{1,30}$/).required().messages({
        'string.pattern.base': 'Only latin letters from 1 to 20'
    }),
    username: Joi.string().regex(/^[a-zA-Z]{1,20}$/).required().messages({
        'string.pattern.base': 'Only latin letters from 1 to 20'
    })
})

export {
    userValidator
}