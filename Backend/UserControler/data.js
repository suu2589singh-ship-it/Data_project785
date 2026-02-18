const express=require("express")
const data=require("./Model/data")


const entrys=(req,res)=>{
    const{BillNo,Name,Product,Total}=req.body;

    if(BillNo=="" && Name=="" && Product=="" && Total==""){
        return(
            res.status(400).json({massage:"field are empty"})
        )
    }


    data.create({
            BillNo:BillNo,
            Name:Name,
            Product:Product,
            Total:Total
        })
        return res.status(200).json({massage:"Entery save"})

}

module.exports=entrys