const express=require('express');
var app=express();
app.get('/',(req,res)=>{
res.send('welcome to my website');
});
app.get('/home',(req,res)=>{
res.send('Welcome To My Home Page');
});
app.get('/contact',(req,res)=>{
    res.send('Welcome To My Contact Page');
    })
app.listen(3000);