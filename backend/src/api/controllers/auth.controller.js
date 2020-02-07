const { Auth } = require('../../services');

module.exports = {
  async login(ctx, next) {
    try {
      const { email, password } = ctx.request.body;
      const message = await Auth.login(email, password);
      ctx.status = message.success ? 200 : 401;
      ctx.body = message;
      await next();
    } catch (error) {
      throw(error);
    }
  },
  async logout(ctx, next) {
    try {
      const bearer = ctx.headers.authorization;
      const token = bearer.split(' ')[1];
      if(!token) throw (401, 'Token is missing!');
      const message = await Auth.logout(token);
      ctx.status = message.success ? 200 : 401;
      ctx.body = message;
      await next();
    } catch (error) {
      throw(error);
    }
  },
  async signup(ctx, next) {
    try {
      const { person } = ctx.request.body;
      const message = await Auth.signup(person);
      ctx.status = message.success ? 200 : 401;
      ctx.body = message;
      await next();
    } catch (error) {
      throw(error);
    }
  }
}