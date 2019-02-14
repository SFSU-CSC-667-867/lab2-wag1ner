
const express = require('express');
const axios = require('axios');


const app = express();
const port = 3000;


app.get('/hello', (req, res) => {
    console.log(req.query);
    res.send('Hello, ' + req.query.name );
});

app.get('/add', (req, res) => res.send(0));

app.get('/network', (req, res) => 
{

    axios.get('http://localhost:3001/world')
    .then((networkResponse) => {
        res.send(networkResponse.data);

    })
    .catch(() =>
    {
        res.send('did not work');
    });
});
app.get('/add', (req, res) => res.send('0'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));