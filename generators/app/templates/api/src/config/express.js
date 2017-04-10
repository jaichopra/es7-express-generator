const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

module.exports = () => {
  const app = express();
  app.use(morgan('dev'));
  app.use(bodyParser.json({ limit: '150mb' }));
  app.use(bodyParser.urlencoded({
    limit: '150mb',
    extended: true,
  }));
  app.use(methodOverride());

  // Routes
  require('../app/routes/index.routes.js')(app);

  app.use(require('../app/middlewares/errorHandler.middleware').errorHandler);

  return app;
};
