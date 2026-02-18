const exprss=require("express")
const jws=require("jsonwebtoken")

const auth=(req,res)=>{                       
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({massage:"faild"})
    }
    jws.verify(token,process.env.JWT,(err,decode)=>{
        if(err){
            return res.status(400).json({massage:"failed"})
        }
        res.status(200)({massage:"ok",decode})
    })
}

module.exports=auth