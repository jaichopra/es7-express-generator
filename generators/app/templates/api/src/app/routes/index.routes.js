import { index } from '../controllers/index.controller';

module.exports = app => {
  app.get('/', index);
};
