// const express=require('express');
const mysql=require('mysql');
const nodemailer=require('nodemailer')
const Email={
    config:{
        host: "smtp.163.com",
<<<<<<< HEAD
        port: 25,
        auth: {
            user: '13058004410@163.com', // generated ethereal user
            pass: 'HJIQDPDPPUVFDLKF', // generated ethereal password
=======
        port: 25,  //163邮箱的SMTP端口就是25
        auth: {
            user: '13058004410@163.com', // generated ethereal user  发件人邮箱
            pass: 'HJIQDPDPPUVFDLKF', // generated ethereal password  邮箱授权码
>>>>>>> dev
        }
    },
    get transporter(){
        return nodemailer.createTransport(this.config);
    },
    get verify(){
        return Math.random().toString().substring(2,6)
    }
}    

const pool=mysql.createPool({
    user:'root',
    password:'root',
    host:'127.0.0.1',
    port:'3306',
    database:'shenye',
    connectionLimit:20
});

// pool.get('/huoqu',function(err,result){
//     if(err)throw err
// });

module.exports={
    pool,
    Email
}