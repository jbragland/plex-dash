const express = require('express');
const router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: '/tmp/' });

router.post('/', upload.single('thumb'), function(req, res, next) {
    console.log("Webhook received!");
    console.log( 'payload', req.body.payload );
    console.log( 'THING?', req.body.payload.Metadata.title );
});

module.exports = router;