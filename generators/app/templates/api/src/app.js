process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');
const app = express();
const port = 3000;
app.listen(port);
console.log(`Content API running at port ${port} in environment ${process.env.NODE_ENV}`);
export { app };
