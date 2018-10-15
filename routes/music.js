const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
    console.log("Webhook received!");
    console.log( JSON.parse(req) );
});

module.exports = router;