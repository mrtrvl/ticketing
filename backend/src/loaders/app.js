const Koa = require('koa');
const app = new Koa();
const router = require('../api/routes/routes');
const body = require('koa-bodyparser');
const { errorHandler } = require('../handlers');

app.use(errorHandler);
app.on('error', (error, ctx) => {
  console.error(error);
});
app.use(body());
app.use(router.routes());
app.use(router.allowedMethods());
module.exports = app;