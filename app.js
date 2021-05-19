const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("<html><h1>welcome to my app</h1></html>")
})

app.listen(port, ()=>{
    console.log(`listening on port:${port}`);
})

