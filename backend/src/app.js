const config = require('./config');
const { app } = require('./loaders');
const PORT = config.port;

app.listen(PORT);
console.log(`App is running on port ${ PORT } ...`)