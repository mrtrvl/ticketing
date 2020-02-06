module.exports = {
  async health(ctx, next) {
    try {
      ctx.body = {
        message: 'Healthy ...',
        success: true
      }
      await next();
    } catch (error) {
      throw (error);
    }
  }
}