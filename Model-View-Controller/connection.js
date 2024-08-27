const mongoose = require("mongoose");

async function connectDB (url) {
    return mongoose.connect(url)
    // .then(()=>console.log("MongoDB Connected successfully"))
    // .catch((err)=>console.log("MongoDB Error",err));
}

module.exports = {connectDB}