/**
 * @author Per Fröjd per.frojd@kartena.se
 * @kind module
 * @desc Responsible for mapping URLs to handlers
 * @exports router
 */
var router = require('express').Router();
var exampleHandler = appRequire('routes/example.js');

router.get('/example', exampleHandler.get);
router.post('/example', exampleHandler.post);

router.get('/', function ping(req, res) {
    res.status(200).json('pong');
});

module.exports = router;
