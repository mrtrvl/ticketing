const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});

const {
  Health,
  Person,
} = require('../controllers');

router
  // Health endpoint
  .get('/health', Health.health)
  // Person endpoints
  .post('/person', Person.create)
  .get('/person', Person.all);

module.exports = router;