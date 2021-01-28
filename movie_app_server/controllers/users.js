var {Email}=require('../pool.js')

var login = async(req,res,next)=>{

}
var register = async(req,res,next)=>{

}
var verify = async(req,res,next)=>{
    var email=req.query.email;
    var mailOptions={
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        subject: "深夜影院", // Subject line
        text: "验证码："+Email.verify, // plain text body
    }
    var info=await Email.transporter.sendMail(mailOptions)
    if(info){
        res.send({
            msg:'验证码发送成功',
            status:0
        })
    }else{
        res.send({
            msg:'验证码发送失败',
            status:-1
        })
    }
}
var logout = async(req,res,next)=>{

}
var getUser = async(req,res,next)=>{

}
var findPassword = async(req,res,next)=>{

}

module.exports={
    login,
    register,
    verify,
    logout,
    getUser,
    findPassword
}