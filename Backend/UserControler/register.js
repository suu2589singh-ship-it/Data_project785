const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const user=require("./Model/user")


const register=async(req,res)=>{
    try{
        const{email,password}=req.body;
    const users=await user.findOne({email})
    if(users)
        res.status(400).json({massage:"something went to wrong"})

    if(password.length < 8)
        res.status(401).json({massage:"your password is less then 8 character"})

    const salts=await bcrypt.genSalt(10)
    const hashs=await bcrypt.hash(password,salts)
    const  newuser=await user.create({
        email:email,
        password:hashs
    })
    let token=jwt.sign({email},process.env.JWT);
    res.cookie("token",token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict",
        
    })
    return (
        res.status(200).json({massage:"your login succesfully"})
    )
}catch(erro){
    console.log(erro);
    
}
}

module.exports=register