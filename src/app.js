const express=require("express");
const app=express();
const path=require("path");

const publicPath=path.resolve(__dirname,"../public");
app.use(express.static(publicPath));

app.listen(8080,()=>console.log("Servidor escuchando en el puerto 8080"));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./view/home.html"));
})
app.get("/register",function(req,res){
    res.sendFile(path.join(__dirname,"./view/register.html"))
})
app.post("/home.html",function(req,res){
    res.sendFile(path.join(__dirname,"./view/home.html"))
})