import { Router } from "express";
import { validate } from 'express-validation';
import { personValidation } from "../validators";

import PersonController from '../controller/person';

const personController = new PersonController();
const personRouter = Router();

personRouter.post(
    '/',
    validate(personValidation),
    personController.createPerson
    
)

personRouter.get(
    '/',
    personController.getPersonList
)

personRouter.get(
    '/:id',
    personController.getPersonById
)

personRouter.put(
    '/:id',
    validate(personValidation),
    personController.updatePerson
)

personRouter.all('*', (req, res) => {
    res.status(404);
})

export default personRouter;