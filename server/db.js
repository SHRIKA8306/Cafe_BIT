const mongoose = require('mongoose')

module.exports = async ()=>{
    const uri = process.env.DB;
    try{
      await mongoose.connect(uri)
      console.log("Connected to MongoDB")
    }catch(err){
      console.log("Connection error :",err.message);
      process.exit(1);
    }
}