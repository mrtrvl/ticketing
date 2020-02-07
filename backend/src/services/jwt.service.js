const { WhiteList } = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config');
const jwtSecret = config.jwt.secret;
module.exports = {
  async sign(person, expiresIn = '1h') {
    try {
      const token = await jwt.sign({ person }, jwtSecret, { expiresIn });
      if (!token) throw (401, 'Token error!');
      const toWhitelist = await WhiteList.query()
        .insert({ token });
      if(!toWhitelist) throw(401, 'Whitelist error!');
      return token;
    } catch (error) {
      throw(error);
    }
  },
  async verify(token) {
    try {
      const white = await WhiteList.query()
        .findOne({ token });
      if(!white) throw(401, 'Token is not valid!');
      const decoded = jwt.verify(token, jwtSecret);
      return decoded;
    } catch (error) {
      throw(error);
    }
  }
}