exports.errorHandler = (err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(500).send('There was an error');
  } else {
    next();
  }
};
