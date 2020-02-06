const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});

const {
  HealthController
} = require('../controllers');

router
  .get('/health', HealthController.health);

module.exports = router;