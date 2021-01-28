// const express=require('express');
const mysql=require('mysql');
const Email={
    config:{
        host: "smtp.163.com",
        port: 587,
        auth: {
            user: '13058004410@163.com', // generated ethereal user
            pass: '_Yu123123', // generated ethereal password
        }
    },
    get transporter(){
        return nodemailer.createTransport(this.config);
    },
    get verify(){
        return Math.random().toString(2,6)
    }
}    

const pool=mysql.createPool({
    user:'root',
    password:'root',
    host:'127.0.0.1',
    port:'3306',
    database:'zhejiangwanfeng',
    connectionLimit:20
});

// pool.get('/huoqu',function(err,result){
//     if(err)throw err
// });

module.exports={
    pool,
    Email
}