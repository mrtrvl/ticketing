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