const express = require('express');
const app = express();
const distDir = __dirname + "./dist/";
const path = require('path');
var appDir = path.dirname(require.main.filename);

app.get('/api', (req,res) => {
    res.send('Working');
});

app.use(express.static(path.join(process.env.PWD, 'dist')));

app.get('/', function(req, res) { res.sendFile(path.join(process.env.PWD + 'dist/index.html')); })

app.listen(process.env.PORT, (req,res) => {
    console.log('Server running at port: ', process.env.PORT);
});


