const express=require("express")
const login=require("../UserControler/login")
const register=require("../UserControler/register")
const entrys=require("../UserControler/data")
const getdata=require("../UserControler/getdata")
routers=express.Router()

routers.post("/login",login)
routers.post("/register",register)
routers.post("/entry",entrys)
routers.get("/getdata",getdata)

module.exports=routers