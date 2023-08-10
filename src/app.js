const express=require("express");
const app=express();
const path=require("path");
const port=process.env.PORT || 3001;

const publicPath=path.resolve(__dirname,"../public");
app.use(express.static(publicPath));

app.listen(port,()=>console.log("Servidor escuchando en el puerto 8080"));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./view/home.html"));
})
app.get("/register",function(req,res){
    res.sendFile(path.join(__dirname,"./view/register.html"))
})
app.get("/login",function(req,res){
    res.sendFile(path.join(__dirname,"./view/login.html"))
})
app.post("/",function(req,res){
    res.sendFile(path.join(__dirname,"./view/home.html"))
})