const express= require('express');
 const dotenv=require('dotenv');
 const path=require('path');
 const cors=require('cors');
 const bodyParser=require('body-parser');
const fileUpload=require('express-fileupload')
 dotenv.config();
const port= process.env.PORT || 5000;
const ConnectToMongo= require('./mongoose');
const { application } = require('express');

const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',require('./routes/auth'));

app.use('/api/loan',require('./routes/loan'));
app.use(express.static('public'));
app.use(fileUpload());
// app.use(bodyParser.urlencoded({extented:false}));
// app.use(bodyParser.json());
app.use('/api/user',require('./routes/profile'));


app.get('/',(req,res)=>{
    res.send(process.env.MONGOURI);
})


ConnectToMongo(process.env.MONGOURI)


app.listen(port,()=>{
    console.log("Backened running at "+port);
})