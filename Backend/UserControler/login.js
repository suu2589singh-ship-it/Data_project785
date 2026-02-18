const express =require ("express")
const bcrypt =require("bcrypt")
const  jwt=require("jsonwebtoken")
const  user=require("./Model/user")


const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
    const users=await user.findOne({email}).select("+password")
    if(!users){
        return res.status(400).json({massage:"something went to wrong"})

    }
    const ismatch=await bcrypt.compare(password,users.password)
    if(!ismatch){
        return res.status(400).json({massage:"something went to wrong"})
    }
    
    let token=jwt.sign({id:user_id},process.env.JWT,);
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"strict",
            maxAge:60*1000
            });
        return res.status(200).json({massage:"Your login"})

    

    }catch(err){
        res.send(err)
        
    }
}


module.exports=login