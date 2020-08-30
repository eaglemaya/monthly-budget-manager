// This is the config for express error log.

const winston = require('winston');

module.exports = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.json()),
};
