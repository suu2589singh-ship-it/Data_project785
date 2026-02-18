const express=require("express")
const data=require("./Model/data")


const getdata=async(res,req)=>{
    try{
        await data.find();
        res.status(200)
    }catch(error){
        res.status(400)

    }


}

module.exports=getdata