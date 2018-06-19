// Generated by CoffeeScript 2.3.1
(function() {
  var level, ref, winston;

  winston = require("winston");

  level = "info";

  if ((ref = process.env.DEBUG) === "1" || ref === "true") {
    level = "debug";
  }

  module.exports = winston.createLogger({
    transports: [
      new winston.transports.Console({
        colorize: true,
        level: level
      })
    ]
  });

}).call(this);
