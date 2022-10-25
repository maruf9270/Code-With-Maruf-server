const express = require('express');
const app= express();
const Port = process.env.PORT || 3150;


app.get('/',(req,res)=>{
    res.send("Code with maruf server running")
})
app.get('/test', (req,res)=>{
    res.send('Your test server is running')
})









app.listen(Port , ()=>{
    console.log('Your server is running on port:',Port);
})