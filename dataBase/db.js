const mongoose = require("mongoose");
const URL = "mongodb+srv://airVent:12345678Q@cluster0.cv1hm6c.mongodb.net/";
const dbConnection = async ()=>{
    try{
        await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser : true})
        console.log("DataBase Connected Successful")

    }catch(error){
        console.log( "Error occur in database " + error)
    }
}
module.exports = dbConnection;