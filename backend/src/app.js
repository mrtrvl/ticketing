const config = require('./config');
const { app, db } = require('./loaders');

const PORT = config.port;
db.initDatabase();
app.listen(PORT, () => {
  console.log(`App is running on port ${ PORT } ...`);
});