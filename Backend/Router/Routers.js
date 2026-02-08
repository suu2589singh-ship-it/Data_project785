const express=require("express")
const login=require("../UserControler/login")
const register=require("../UserControler/register")
const entrys=require("../UserControler/data")
routers=express.Router()

routers.post("/login",login)
routers.post("/register",register)
routers.post("/entry",entrys)

module.exports=routers