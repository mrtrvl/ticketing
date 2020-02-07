const { Person } = require('../models');
module.exports = {
  async create(person) {
    try {
      const createdPerson = await Person.query().insert({
        ...person
      });
      const message = {
        message: 'Person created.',
        success: true,
        person: createdPerson
      }
      return message;
    } catch (error) {
      throw (error);
    }
  }, async all() {
    try {
      const persons = await Person.query();
      const message = {
        message: 'Persons.',
        success: true,
        persons
      }
      return message;
    } catch (error) {
      throw (error);
    }
  }
}