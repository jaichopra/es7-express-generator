import { wrap } from '../helpers/es7';
import { exampleFunction } from '../helpers/example.helper';

const index = wrap(async (req, res, next) => {
  const data = await exampleFunction();
  return res.send({ hello: data });
});

export { index };