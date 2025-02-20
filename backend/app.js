const express=require('express')
const ErrorHandler=require('../utils/ErrorHandler')
const user=require('./controls/user')
const cors=require('cors')
const app=express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})) ///to need the url we use urlencoded.

if(process.env.NODE_ENV!=='PRODUCTION'){
require('dotenv').config({path:'backend/config/.env'})
}

app.use('/api',user)
app.use(ErrorHandler)
module.exports=app;