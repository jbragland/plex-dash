const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
    console.log("Webhook received!");
    console.log(req.body);
});

module.exports = router;