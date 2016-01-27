/**
 * @desc A module responsible for initializing the logging functionality.
 * @kind module
 * @module logs
 * @exports loggerService
 */
var accessLog = require('./access.js');
var customLog = require('./custom.js');

var loggerService = {};

loggerService.init = function init(app) {
    accessLog.setUp(app);
    customLog.init();
};

module.exports = loggerService;
