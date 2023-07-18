const express=require("express");
const app=express();
const path=require("path");

app.listen(8080,()=>console.log("Servidor escuchando en el puerto 8080"));
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"/view/home.html"));
})