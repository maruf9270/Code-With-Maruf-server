const express = require('express');
const app= express();
const cors = require('cors')
app.use(cors());
const Port = process.env.PORT || 3150;
// Importing the course cateory file from the directory\
const categories = require('./CouseCategory.json')

app.get('/',(req,res)=>{
    res.send("Code with maruf server running")
})
app.get('/test', (req,res)=>{
    res.send('Your test server is running')
})
// getting request for course category and sending response for the course category
app.get('/categories',(req,res)=>{
    res.send(categories)
    
})
// Getting request for specific course and sending it
app.get('/:ID',(req,res)=>{
    const courseID = req.params.ID
   const found = categories.find(c=>c.id === courseID)
   res.send(found)
})









app.listen(Port , ()=>{
    console.log('Your server is running on port:',Port);
})