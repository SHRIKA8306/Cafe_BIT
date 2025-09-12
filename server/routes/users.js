const router = require('express').Router()
const bcrypt = require('bcrypt');
const {User,registerSchema} = require('../model/user');
router.post('/',async(req,res)=>{
    //1.validate input
    const{error,value} = registerSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    //2.check if email already exists
    const exists = await User.findOne({email:value.email.toLowerCase()});
    
    if(exists) return res.status(409).send('User with this email already exists');

    //hash the password
    const saltRounds = Number(process.eventNames.SALT_ROUNDS) || 10
    const passwordHash =await bcrypt.hash(value.password,saltRounds)

    //create user
    const user =await User.create({
        firstName:value.firstName,
        lastName:value.lastName,
        email:value.email.toLowerCase(),
        passwordHash
    })
    //return basic info
    res.status(201).send({
        id: user._id,
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
    });
})
module.exports = router;