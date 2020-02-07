const JWT = require('./jwt.service');
const Hash = require('./hash.service');
const Person = require('./person.service');
module.exports = {
  async login(email, password) {
    try {
      const person = await Person.findByEmail(email);
      const match = await Hash.match(password, person.password);
      const token = await JWT.sign(person);
      const message = {
        message: 'Token',
        success: true,
        token
      }
      return message;
    } catch (error) {
      throw(error);
    }
    
    
  },
  async signup(person) {
    try {
      const hash = await Hash.hash(person.password);
      person.password = hash;
      const created = await Person.create(person);
      const message = {
        message: 'Signed up',
        success: true,
        created
      }
      return message;
    } catch (error) {
      throw error;
    }
  }
}