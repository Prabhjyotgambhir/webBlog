const express = require('express');
const app = express();
const distDir = __dirname + "./dist/";
const path = require('path');
var appDir = path.dirname(require.main.filename);

app.get('/api', (req,res) => {
    res.send('Working');
});

app.use(express.static(path.join(__dirname, '/../dist')));


// Server running at port 3000
app.listen(2000, (req,res) => {
    console.log('Server running at port: ', process.env.PORT);
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join('../'  +__dirname, 'dist/index.html'));
//   });

app.get('/', function(req, res) { res.sendFile(path.join(__dirname + '/../dist/index.html')); })

