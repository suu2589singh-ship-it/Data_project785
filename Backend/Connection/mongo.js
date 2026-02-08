const mongoclient=require("mongoose")


const client=async()=>{
    try{
    await mongoclient.connect(process.env.mongo);
    console.log("Mongo Connected")
    }catch(err){
        console.log("Mongo",err)
    }
}




module.exports=client


