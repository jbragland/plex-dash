const express = require('express');
const router = express.Router();

var multer  = require('multer');
var upload = multer({ dest: '/tmp/' });

router.post('/', upload.single('thumb'), function(req, res, next) {
    const payload = JSON.parse(req.body.payload);
    console.log( 'title', payload.Metadata.title );
    console.log( 'album', payload.Metadata.parentTitle );
    console.log( 'artist', payload.Metadata.grandparentTitle );

    res.sendStatus(200);
});

module.exports = router;