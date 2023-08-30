import Joi from "joi";

export const fetchBalanceSheetSchema = Joi.object().keys({
    name: Joi.string().required(),
    yearEstablished: Joi.number().required(),
    loanAmount: Joi.number().required(),
    accountantProvider: Joi.string().required()
})