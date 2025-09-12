const jwt = require('jsonwebtoken');
const{model} = require('mongoose');
module.exports=(req,res,next)=>{
   const header = req.headers.authorization || '' ;
   //check if user token provide or not
   const token = header.startsWith('Bearer')?header.slice(7):null;
   if(!token) return res.status(401).send("No Token Provided");
   try{
    const decode = jwt.verify(token,"dev_secret_change_me")
    req.user = decode;
    next();
   }catch(error){
    return res.status(401).send("Invalid or expired token")
   }
}