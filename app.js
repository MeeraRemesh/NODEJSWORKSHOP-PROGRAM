const express=require('express');
const hbs=require('hbs');
var app=express();
app.set('view engine','hbs');
app.get('/',(req,res)=>{
res.render('index.hbs');
});
app.get('/home',(req,res)=>{
res.send('Welcome To My Home Page');
});
app.get('/contact',(req,res)=>{
    res.send('<h1>Welcome To My Contact Page</h1>');
    })
app.listen(3000);