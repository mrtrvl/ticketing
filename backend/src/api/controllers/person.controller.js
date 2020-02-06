const { Person } = require('../../services');
module.exports = {
  async create(ctx, next) {
    try {
      const { person } = ctx.request.body;
      const message = await Person.create(person);
      if (!message) throw new Error('Person not created!');
      ctx.body = message;
      await next();
    } catch (error) {
      console.log(error);
      throw(error);
    }
  },
  async all(ctx, next) {
    try {
      const message = await Person.all();
      if (!message) throw new Error('Persons not found!');
      ctx.body = message;
      await next();
    } catch (error) {
      console.log(error);
      throw(error);
    }
  }
}