import { PersonInterface } from "../interface/person.interface";
import personDAO from '../dao/person';

class PersonService {
    createPerson(person: PersonInterface) {
        return personDAO.createPerson(person);
    }

    updatePerson(personId: Number, person: PersonInterface) {
        return personDAO.updatePerson(personId, person);
    }

    getPersonList() {
        return personDAO.getPersonList();
    }

    getPersonById(personId: Number) {
        return personDAO.getPersonById(personId);
    }
}

export default new PersonService();
