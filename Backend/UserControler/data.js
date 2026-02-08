const express=require("express")
const data=require("./Model/data")


const entrys=(req,res)=>{
    const{BillNo,Name,Product,Total}=req.body;

    if(BillNo=="" && Name=="" && Product=="" && Total==""){
        return(
            res.json({massage:"fill all field"})
        )
    }


    data.create({
            BillNo:BillNo,
            Name:Name,
            Product:Product,
            Total:Total
        })
    return res.status(201)

}

module.exports=entrys