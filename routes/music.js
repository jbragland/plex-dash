const express = require('express');
const router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: '/tmp/' });

router.post('/', upload.single('thumb'), function(req, res, next) {
    console.log("Webhook received!");
    const payload = JSON.parse(req.body.payload);
    console.log( 'payload', payload );
    console.log( 'THING?', payload.Metadata.title );
});

module.exports = router;