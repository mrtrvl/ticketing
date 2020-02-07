const bcrypt = require('bcrypt');
const config = require('../config');
const saltRounds = config.hash.saltRounds;
module.exports = {
  async hash(password) {
    try {
      const hash = bcrypt.hash(password, saltRounds);
      return hash;
    } catch (error) {
      throw(error);
    }
  },
  async match(password, hash) {
    try {
      const match = await bcrypt.compare(password, hash);
      if(!match) throw(401, 'Wrong password!');
      return match;
    } catch (error) {
      throw(error);
    }
  }
}