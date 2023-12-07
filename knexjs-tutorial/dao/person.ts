import { PersonInterface } from "../interface/person.interface";
import db from '../db/db';

class PersonDAO {
  async createPerson(person: PersonInterface): Promise<Number> {
    console.log(person);
    const [id] = await db('person')
      .insert({
        email: person.email,
        first_name: person.firstName,
        last_name: person.lastName,
        location_id: person.locationId
      })
      .returning('id');

    return id;
  }

  async updatePerson(personId: Number, person: PersonInterface): Promise<Boolean> {
    const res = await db('person')
      .where({id: personId})
      .update({
        email: person.email,
        first_name: person.firstName,
        last_name: person.lastName,
      });

    return res;
  }

  async getPersonList(): Promise<[PersonInterface]> {
    const personList = await db('person')
      .select('*');

    return personList;
  }

  async getPersonById(personId: Number): Promise<PersonInterface> {
    const personItem = await db('person')
      .first('*')
      .where('id', '=', personId);
      
    return personItem;
  }
}

const personDAO = new PersonDAO();

export default personDAO
