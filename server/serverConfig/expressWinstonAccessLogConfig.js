// This is the config for express access log.
// this will record all the incoming request except
// the routes we ignore.

const winston = require('winston');

module.exports = {
  transports: [new winston.transports.Console()],
  format: winston.format.json(),
  meta: false,
  msg: 'HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
  expressFormat: true,
  colorize: false,
};
