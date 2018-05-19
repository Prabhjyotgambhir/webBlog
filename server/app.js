const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.send('Working');
});

// Server running at port 3000
app.listen(process.env.PORT, (req,res) => {
    console.log('Server running at port: ', process.env.PORT);
});
