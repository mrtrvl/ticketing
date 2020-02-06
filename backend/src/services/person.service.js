const { Person } = require('../models');
module.exports = {
  async create(person) {
    try {
      const createdPerson = await Person.query().insert({
        ...person
      });
      console.log(createdPerson)
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
      console.log(persons)
      const message = {
        message: 'Person created.',
        success: true,
        persons
      }
      return message;
    } catch (error) {
      throw (error);
    }
  }
}