const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const music = require('./routes/music');

app.use(bodyparser.json());
app.use('/', music);

app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})