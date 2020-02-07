const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});

const {
  Health,
  Person,
  Auth
} = require('../controllers');
const { isAuthenticated } = require('../../policies');
router
  // Health endpoint
  .get('/health', Health.health)
  // Person endpoints
  .post('/person', Person.create)
  .get('/person', isAuthenticated, Person.all)
  // Auth endpoints
  .post('/login', Auth.login)
  .post('/signup', isAuthenticated, Auth.signup)
  .get('/logout', Auth.logout);

module.exports = router;