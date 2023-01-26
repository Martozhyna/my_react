import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().min(1).max(100).required(),
    name: Joi.string().regex(/^[a-zA-Z ]{1,30}$/).required().messages({
        'string.pattern.base': 'Only latin letters from 1 to 20'
    }),
    body: Joi.string().regex(/^[a-zA-Z ]{1,100}$/).required().messages({
        'string.pattern.base': 'Only latin letters from 1 to 100'
    }),
})

export {
    commentValidator
}