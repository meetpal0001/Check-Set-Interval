var express=require("express");

var app=express();

var HTTP_PORT = process.env.PORT || 8080;

var x=0

setInterval(()=>{
    x+=1
},1000)

app.get("/",(req,res)=>{
    res.send({num:x})
})

app.listen(HTTP_PORT,()=>{
    console.log("app listning on: "+HTTP_PORT)
})