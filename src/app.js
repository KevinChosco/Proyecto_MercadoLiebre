const { log } = require("console");
const express=require("express");
const app=express();
const path=require("path");

app.listen(8080,()=>console.log("Servidor escuchando en el puerto 8080"));