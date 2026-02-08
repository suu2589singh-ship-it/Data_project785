const mongo=require("mongoose")

const entry=new mongo.Schema({
    BillNo:{
        type:String,
        required:true,

    },
    Name:{
        type:String,
        required:true,
    },
    Product:{
        type:String,
        required:true
    },
    Total:{
        type:Number,
        required:true
    }
})

const data=mongo.model("entry",entry)
module.exports=data