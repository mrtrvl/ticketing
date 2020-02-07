const { JWT } = require('../services');
module.exports = {
  async isAuthenticated(ctx, next) {
    try {
      const bearer = ctx.headers.authorization;
      if (!bearer) throw (401, 'Authorization header is missing!');
      const token = bearer.split(' ')[1];
      if(!token) throw(401, 'Authorization bearer is missing!');
      const decoded = await JWT.verify(token);
      if(!decoded) throw(401, 'Token is not valid!');
      await next();
    } catch (error) {
      throw(error);
    }
  }
}