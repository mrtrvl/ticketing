const Koa = require('koa');
const app = new Koa();
const router = require('../api/routes/routes');
const body = require('koa-bodyparser');
const { errorHandler } = require('../handlers');

app.on('error', (ctx, error) => errorHandler);
app.use(body());
app.use(router.routes());
app.use(router.allowedMethods());
module.exports = app;