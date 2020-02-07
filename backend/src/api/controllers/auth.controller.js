module.exports = {
  async login(ctx, next) {
    try {
      const { email, password } = ctx.request.body;
      await next();
    } catch (error) {
      throw(error);
    }
  }
}