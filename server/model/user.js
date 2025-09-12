const mongoose = require('mongoose')
const Joi = require('joi')
const userSchema = new mongoose.Schema(
    {
     firstName:{type: String,required: true,trim: true,minlength: 2},  
     lastName:{type: String,required: true,trim: true,minlength: 2},
     email:{type: String,required: true,unique: true,lowercase:true,trim: true},
     passwordHash:{type: String,required: true}

    },
    {timestamps: true}
)
const User = mongoose.model("Customer_Account",userSchema);
const registerSchema = Joi.object({
    firstName:Joi.string().min(2).required(),
    lastName:Joi.string().min(2).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required(),
});
const loginSchema = Joi.object(
    {
       email:Joi.string().email().required(), 
       password:Joi.string().min(6).required(),
    }
);
module.exports = {User,registerSchema,loginSchema};