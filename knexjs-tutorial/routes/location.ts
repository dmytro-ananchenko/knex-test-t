import { Router } from "express";
import { validate } from 'express-validation';
import { locationValidation } from "../validators";
import LocationController from "../controller/location";

const locationController = new LocationController();

const locationRouter = Router();

locationRouter.post(
    '/location',
    validate(locationValidation),
    locationController.createLocation
)

locationRouter.get(
    '/',
    locationController.getLocationList
)

locationRouter.get(
    '/:id',
    locationController.getLocationById
)

locationRouter.all('*', (req, res) => {
    res.status(404);
})

export default locationRouter;