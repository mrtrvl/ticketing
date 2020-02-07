const jwt = require('jsonwebtoken');
const config = require('../config');
const jwtSecret = config.jwt.secret;
module.exports = {
  async sign(person, expiresIn = '1h') {
    try {
      const token = await jwt.sign({ person }, jwtSecret, { expiresIn });
      return token;
    } catch (error) {
      throw(error);
    }
  },
  async verify(token) {
    try {
      const decoded = jwt.verify(token, jwtSecret);
      return decoded;
    } catch (error) {
      
    }
  }
}