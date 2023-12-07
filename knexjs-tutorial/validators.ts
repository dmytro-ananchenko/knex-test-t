import { Joi } from 'express-validation';

const locationValidation = {
    body: Joi.object({
        city: Joi.string().required()
    })
}

const personValidation = {
    body: Joi.object({
        id: Joi.number(),
        email: Joi
            .string()
            .email()
            .required()
            .error((err) =>
                "wrong email"
        ),
        firstName: Joi
            .string()
            .required()
            .error((err) =>
                "wrong first name"
        ),
        lastName: Joi
            .string()
            .required()
            .error((err) =>
                "wrong last name"
        )
    })
}
/*
const parameterIdValidation = {

}
*/
export {
    locationValidation,
    personValidation,
    // parameterIdValidation
}