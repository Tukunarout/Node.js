const express = require("express")
const {connectDB} = require("./connection")

const {logReqRes} = require("./middlewares")

const userRouter = require("./routes/users")

const app = express()
const PORT = 2024;


//Connection
connectDB('mongodb://127.0.0.1:27017/main').then(()=>console.log("MongoDB Connected successfully"));

//Middleware -Plugins
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("log.txt"))


//Routes
app.use("/api/users",userRouter);



app.listen(PORT,()=>{
console.log(`Server listen to the port ${PORT}`);
})