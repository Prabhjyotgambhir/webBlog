const express = require('express');
const app = express();
const passport = require('passport');
const port = 3000;


app.get('/', (req,res) => {
    res.send('Working');
});

// Server running at port 3000
app.listen(port, (req,res) => {
    console.log('Server running at port: ', port);
});
