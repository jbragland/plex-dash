const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
    console.log("Webhook received!");
    console.log( 'req.params', req.params );
    console.log( 'req.query', req.query );
    console.log( 'req.res', req.res );
    console.log( 'req.body keys', Object.keys(req.body) );
});

module.exports = router;