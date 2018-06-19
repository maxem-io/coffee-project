winston = require "winston"

level = "info"
level = "debug" if process.env.DEBUG in ["1", "true"]

module.exports = winston.createLogger
	transports: [
		new winston.transports.Console
			colorize: true
			level:    level
	]