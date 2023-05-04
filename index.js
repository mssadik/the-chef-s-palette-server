const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
const chefData = require('./chefData/chefData.json')
const data = require('./chefData/data.json')

app.get('/',(req, res) =>{
    res.send('Hello Bangladesh!');
})

app.get('/chefData', (req, res) =>{
    res.send(chefData);
})

app.get('/chefData/:id', (req, res) =>{
    const id = req.params.id;

    const details = chefData.find(n => n.id == id);
    res.send(details)
})

app.get('/data', (req, res) =>{
    res.send(data)
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})