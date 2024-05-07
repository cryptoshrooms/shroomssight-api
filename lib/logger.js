var winston = require('winston');
var config = require('../config/config');

var logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'error'
    }),
  ]
});
logger.transports.console.level = config.loggerLevel;

module.exports.logger = logger;
