/**
 * @author 
 * @kind service
 * @module example
 * @description example service
 * @exports exampleService
 */

var config = appRequire('config/config.json');
var winston = require('winston');
var exampleService = {};

exampleService.doSomething = function doSomething(param1) {
    return { success: true, message: param1 };
}

module.exports = exampleService;
