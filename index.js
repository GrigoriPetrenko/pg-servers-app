const http = require('http');
const app = require('./app');

require('./models');

const PORT = process.env.PORT || 5002;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);

// post / api / users;
// index - app - router - usersRouter - n*mw - controller - model;

// delete /api/users/5
