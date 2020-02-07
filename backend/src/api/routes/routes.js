const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});

const {
  Health,
  Person,
  Auth
} = require('../controllers');

router
  // Health endpoint
  .get('/health', Health.health)
  // Person endpoints
  .post('/person', Person.create)
  .get('/person', Person.all)
  // Auth endpoints
  .post('/login', Auth.login)
  .post('/signup', Auth.signup);

module.exports = router;