const express = require('express');
const app = express();
const port = 8000;



app.get("/",(req,res)=>{
    res.end("Hello World");
});

app.post("/create",(req,res)=>{
    res.end("Create User");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});