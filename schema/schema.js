const mongoose = require("mongoose");
const R00201303DataBase = mongoose.Schema({
    
    name : String,
    module : String,
    description : String,
    percentage : String,
    dueDate : String
})
const R00201303 = mongoose.model("R00201303DataBase", R00201303DataBase);
module.exports = R00201303;