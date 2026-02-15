const express=require ("express")
const app=express()
const routers=require("./Router/Routers")
const client =require("./Connection/mongo")
const cors=require("cors")
const auth=require("./UserControler/auth")
const cookies=require("cookie-parser")
const dotenc=require("dotenv").config({override:true})
app.use(express.json());
app.use(cookies())
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:true,credentials:true}));
app.get("/",  (req,res)=> {
    res.send("hellow");
});
app.use("/",routers)
client();

const port=process.env.PORT ||3000
app.listen(port,"0.0.0.0",()=>{
    console.log("runnnning it")
})