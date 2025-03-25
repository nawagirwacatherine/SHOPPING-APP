const express = require('express');
const cors = require('cors');
const app = express ();
const port = 5000;


app.use(cors());

const data = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item2'}
        
   
];

app.get ('/api/items',(req,req) => {
    res.json(data);
});

app.listen(port, () => {
    console.log ('server is running on http://localhost:${port}');
});