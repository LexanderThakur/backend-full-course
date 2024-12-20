//the addresss if this server is : 
// http://localhost:8383
// ip-> 127.0.0.1:8383


const express= require("express");
const app = express();


const PORT=8383

//Endpoint- HTTP VERBS(method) && routes()path
//the method informs the nature of req and 
// route is further subsirectory,this location are called
//endpoints

app.get('/',(req,res)=>{

//this is endpoint number 1- /
console.log('yay i hit a endpoint',req.method);//like get or post
res.sendStatus(201);//200-299 ,means succesfull,400 level is error
//500 means error on server side




})//this comes before app.listen



app.get('/dashboard',(req,res)=>{
    res.send('<h1>this is a website</h1>');
})

app.listen(PORT,()=> console.log(`server has started on: ${PORT}`));


