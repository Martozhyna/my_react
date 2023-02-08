import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
    price: Joi.number().max(1000000).min(0).required(),
    year: Joi.number().max(new Date().getFullYear()).min(1990).required()
});

export {
    carValidator
};