require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db.js')

const app = express();
const userRoutes = require('./routes/users.js')
const authRoutes = require('./routes/auth.js')
const auths = require('./middleware/auth.js')
const {User} = require('./model/user.js')
app.use(cors());
app.use(express.json())
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)
//connect to db
db()
app.get('/',(_req,res)=>{
    res.send("Api is Running")
})
//jwt token verify
app.get('/api/me',auths,async (req,res)=>{
    const me = await User.findById(req.user.id).select('-passwordHash')
    if(!me)return res.status(404).send("user not found")
    res.send(me)
})
const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`Listioning on port ${port}`))