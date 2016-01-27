/**
 * @desc A logger for custom messages, output to a daily rotating file
 * @exports customLogger
 */

var winston = require('winston');
var config = appRequire('config/config.json');

var customLogger = {};

// See https://github.com/winstonjs/winston/blob/master/docs/transports.md#file-transport for more options.
// winston-daily-rotate-file is a custom module added that only adds the datePattern option.
customLogger.init = function init() {
    winston
        .add(require('winston-daily-rotate-file'), {
            name: 'log',
            json: false,
            datePattern: '-yyyyMMdd.log',
            filename: config.logDirectory + '/' + 'log',
            handleExceptions: true,
            humanReadableUnhandledException: true,
        });
};

module.exports = customLogger;
