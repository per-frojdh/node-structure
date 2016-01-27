/**
 * @author 
 * @copyright Kartena AB 2016
 * @license MIT (or something)
 * @kind module
 * @module example
 * @description exampleHandler
 */
var winston = require('winston');
var exampleService = appRequire('services/example');

var exampleModule = {};
var privateFunction = function privateFunction(param1, param2) {
    winston.log('info', 'Private function was used', { metadata: { parameters: [param1, param2] }});
    return param1 + ' ' + param2;
};

/**
 * @summary - This shows a preferred way of defining route handlers/methods.
 * @param {object} req - The express request object
 * @param {object} res - The express response object
 */
exampleModule.get = function get(req, res) {
    res.status(200).send(privateFunction('Hello', 'World!'));
};

/**
 * @summary - This shows a preferred way of defining route handlers/methods.
 * @param {object} req - The express request object
 * @param {object} res - The express response object
 */
exampleModule.post = function post(req, res) {
    // Read request-body stuff.
    var requestParameter = req.body.example;
    
    // Check if we got anything.
    if (requestParameter) {
        // Send stuff to service
        var json = exampleService.doSomething(requestParameter);
        
        // return response
        res.status(200).json(json);    
    } else {
        // Uh oh, no request parameter.
        res.status(404).send('404 Not found');
    }
};

module.exports = exampleModule;
