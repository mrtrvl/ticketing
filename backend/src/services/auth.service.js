const { Person } = require('../services');

module.exports = {
  async login(username, password) {
    const person = await Person.findByEmail(email);
    
  }
}