/**
 * @author Per Fröjd per.frojd@kartena.se
 * @copyright Kartena AB 2016
 * @license MIT (or something)
 * @kind service
 * @description Sets up an API endpoint to receive markdown, parse it, inline
 * css and return an email template (as HTML)
 */
'use strict';

// To avoid deep nested require statements that requires traversing a lot of
// subfolders we define a require helper in the global window. To avoid eslint
// complaining (and because we need to set this global before importing
// modules) we disable this rule here.
/* eslint-disable vars-on-top */
global.appRequire = function appRequire(name) {
    return require(__dirname + '/' + name);
};

var config = appRequire('config/config.json');
var express = require('express');
var bodyParser = require('body-parser');
var serviceLogger = appRequire('services/log');
var winston = require('winston');
var app = module.exports = express();

// Get the port and host from environment variables, config file or fall
// back to defaults.
var port = process.env.LK_EMAIL_SERVICE_PORT || config.port || 8080;
var host = process.env.LK_EMAIL_SERVICE_IP || config.host || '127.0.0.1';
/* eslint-enable vars-on-top */

// Initialize loggers
serviceLogger.init(app);

// This is needed to read incoming request bodies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Set up the root of the API
app.use('/api/v1', appRequire('routes'));

// Start up the application on the given host and port.
app.listen(port, host, function listen() {
    winston.log('info', 'Application started on ' + host + ':' + port);
});
