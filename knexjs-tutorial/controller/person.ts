import { Request, Response } from "express";
import personService from '../service/person';
import { PersonInterface } from "../interface/person.interface";

class PersonController {
  async createPerson(req: Request, res: Response) {

    const person: PersonInterface = req.body;

    try {
      const id = await personService.createPerson(person);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }

  async getPersonList(req: Request, res: Response) {
    try {
      const personList = await personService.getPersonList();
      res.status(200).json(personList);
    } catch (err) {
      console.error(err);
    }
  }

  async getPersonById(req: Request, res: Response) {
    const personId = Number(req.params.id);

    try {
      const personItem = await personService.getPersonById(personId);
      res.status(200).json(personItem);
    } catch (err) {
      console.error(err);
    }
  }

  async updatePerson(req: Request, res: Response) {
    
    const personId = Number(req.params.id);
    const person: PersonInterface = req.body;

    try {
      const id = await personService.updatePerson(personId, person);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

export default PersonController;
