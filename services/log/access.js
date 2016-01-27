/**
 * @desc A logger for incoming requests which will be output to a daily
 * rotating file and console output.
 * @exports access
 */

var morgan = require('morgan');
var fs = require('fs');
var fsr = require('file-stream-rotator');
var config = appRequire('config/config.json');

var access = {};

access.setUp = function setUpLogging(app) {
    var accessLogStream;

    // Check if the logs directory exists, otherwise create it.
    fs.existsSync(config.logDirectory) || fs.mkdirSync(config.logDirectory);

    // Create a stream wtih fsr, for rotating daily log files.
    accessLogStream = fsr.getStream({
        filename: config.logDirectory + '/access-%DATE%.log',
        frequency: 'daily',
        verbose: false,
        date_format: 'YYYYMMDD',
    });

    // Log to file
    app.use(morgan('combined', { stream: accessLogStream }));

    // Also log to STDOUT
    app.use(morgan('combined'));
};

module.exports = access;
