import { Request, Response } from "express";

import locationService from '../service/location';

class LocationController {
  async createLocation(req: Request, res: Response) {
    try {
      const id = await locationService.createLocation(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }

  async getLocationList(req: Request, res: Response) {
    try {
      const locationList = await locationService.getLocationList();
      res.status(200).json(locationList);
    } catch (err) {
      console.error(err);
    }
  }

  async getLocationById(req: Request, res: Response) {
    const locationId = Number(req.params.id);

    try {  
      const locationItem = await locationService.getLocationById(locationId);
      res.status(200).json(locationItem);
    } catch (err) {
      console.error(err);
    }
  }

  async getLocationByPersonId(req: Request, res: Response) {
    const personId = Number(req.params.personId);
    
    try {
      const locationItem = await locationService.getLocationByPersonId(personId);
      res.status(200).json(locationItem);
    } catch (err) {
      console.error(err);
    }
  }
}

export default LocationController;
