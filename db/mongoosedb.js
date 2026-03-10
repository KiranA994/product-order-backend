const mongoose = require("mongoose")

require('dotenv').config();

const connectionString = process.env.MONGO_URL

mongoose.connect(connectionString)
.then((result)=>{
    console.log("mongodb connected successfully");
})
.catch((err)=>{
    console.log(err);
})