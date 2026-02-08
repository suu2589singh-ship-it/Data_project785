const exprss=require("express")
const jws=require("jsonwebtoken")

const auth=(req,res)=>{                       
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({massage:"faild"})
    }
    jws.verify(token.process.env.jwt,(err,decode)=>{
        if(err){
            return res.json({massage:"failed"})
        }
        res.json({massage:"ok",decode})
    })
}

module.exports=auth