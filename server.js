const express = require('express');
const app = express();

const music = require('./routes/music');

app.get('/test', (req, res) => {  
    setTimeout(() => {
        res.send('done');
    }, 180000)
});

app.use('/', music);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})