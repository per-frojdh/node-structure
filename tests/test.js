/**
 * @author 
 * @module Tests
 * @kind test
 * @desc - some tests
 */

// Disable some eslint checks
/* eslint-disable func-names, no-unused-vars */
var request = require('supertest');
var should = require('chai').should();
var assert = require('chai').assert;
var app = require('../index.js');
var config = require('../config/config.json');
var exampleService = require('../services/example/index.js');

/**
 * @desc - Check that application is alive.
 */
describe('GET /', function () {
    it('respond with OK', function (done) {
        request(app)
            .get('/api/v1/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

/**
 * @desc - Test the service
 */
describe('Calling service', function () {
    it('should return json', function (done) {
        var str = "Hello world!";
        var response = exampleService.doSomething(str);
        assert(response !== null, 'Service failed');
        assert.equal(str, response.message, "Message doesn't add up");
        response.message.should.equal(str);
        done();
    });
});
