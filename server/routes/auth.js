const router=require('express').Router();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {User,loginSchema}=require('../model/user');
const { request } = require('express');
//post/api/auth
router.post('/',async(req,res)=>{
    //1.validate input
    const{error,value}=loginSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    //find user email
    const user=await User.findOne({email:value.email.toLowerCase()})
    if(!user)res.status(401).send('Invalid email or password')
    //check password
    const ok=await bcrypt.compare(value.password,user.passwordHash)
    if(!ok)res.status(401).send('Invalid email or password')
    //create jwt token
    const token=jwt.sign(
        {id:user._id,email:user.email,name:user.firstname},
        process.env.JWT_SECRET||"shri@march",
        {expiresIn:process.env.JWT_EXPRIRES_IN||'1h'}    
    )
    // return token and  user information
    res.send({
        message:"Logged in Successfully",
        token,
        id:user._id,
        firstname:user.firstname,
        lastname:user.lastname,
        email:user.email
    })
})
module.exports=router;