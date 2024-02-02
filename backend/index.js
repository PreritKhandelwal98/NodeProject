const express = require('express');
require('./db/config')
const User = require('./db/User');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/',(req,resp)=>{
    resp.send("This is working correctly");
})

app.post('/register',async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    console.log(result);
})

app.listen(7200);