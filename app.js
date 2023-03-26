const express = require('express');
const { errorHandlers } = require('./middleware');
const router = require('./routes');

const app = express();

// app.get(
//   '/',
//   (req, res, next) => {
//     console.log('handler 1 :>> ');
//     next();
//   },
//   (req, res) => {
//     console.log('handler 2 :>> ');
//     res.send('app )))');
//   }
// );

app.use(express.json());

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;
