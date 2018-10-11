const express = require('express');
const app = express();

const music = require('./routes/music');

app.use('/', music);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})