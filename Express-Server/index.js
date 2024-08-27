//Requiring express server package
const express = require("express");

const app = express();
//Taking a port for running our server
const PORT = 8000;
//Using json() to get access of json data
app.use(express.json());

//Calling a Get method to check our server
app.get("/",async (req,res)=>{
    return res.send("Hello World");
});

//Running our server
app.listen(PORT,()=>{
    console.log(`Servre listen at port: ${PORT}`)})