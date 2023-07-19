const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connecttoMongo = async()=>{
    
    const db = await mongoose.connect(`mongodb+srv://fardinsk:1234%40ssk@ecommerce.nwyi3yl.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Connection to Mongodb successfull");
    return db;
}


module.exports = connecttoMongo;