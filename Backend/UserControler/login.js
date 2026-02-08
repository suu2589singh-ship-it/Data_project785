const express =require ("express")
const bcrypt =require("bcrypt")
const  jwt=require("jsonwebtoken")
const  user=require("./Model/user")


const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
    const users=await user.findOne({email}).select("+password")
    if(!users){
        return res.send("somthinng went to wronng")

    }
    const pass=await bcrypt.compare(password,users.password)
    if(pass)res.send("your login")
    
    let token=jwt.sign({id:user_id},process.env.jwt,);
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"strict",
            maxAge:60*1000
            });
        return res.send("login Succefuly")

    

    }catch(err){
        res.send(err)
        
    }
}


module.exports=login