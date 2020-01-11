const express = require('express');
const router =express.Router()
const jwt = require('../../utils/jwt')
const Mail = require('../../mail');
const codes = {};
const adminModel = require('../../db/model/adminModel')
// 获取邮箱验证码
router.post('/getMailCode',(req,res)=>{
  console.log(req)
  let {mail} = req.body;
  let code = parseInt(Math.random()*100000);
  codes[mail]= code;//将信息保存到内存里
  Mail.sendMail(mail,code)
  .then(()=>{
      res.send({err:0,msg:'验证码ok'})
  })
  .catch(()=>{
      res.send({err:-1,msg:'验证码nook'})
  })
})
// 注册  
router.post('/reg',(req,res)=>{
  let {userName,passWord,code} = req.body;
  console.log(userName, passWord,code);  
  if(codes[userName] == code){
      console.log('验证码成功');
      adminModel.find({userName:userName})
      .then((data)=>{
        if(data.length>0){
          throw -3
        } 
          return adminModel.insertMany({userName:userName,passWord:passWord,rootList:['0','1','2-0','2-1','2-2','3']})
      })
      .catch((err)=>{
        console.log('catch',err);
        let obj = {}
        switch (err) {
          case -3:
            obj={err:-3,msg:'邮箱已注册'}
            break;
          default:
            break;
        }
        res.send(obj)
      })
      .then((data)=>{
        res.send({err:0,msg:'注册ok'})
      })
  }  else{
      console.log('验证码失败');
      res.send({err:-1,msg:'验证码错误请重试'}) 
  } 
})
// 登录
router.post('/login',(req,res)=>{
  let {userName,passWord} = req.body 
  let rootList=[]
  let token=null
  let _id=''
  adminModel.findOne({userName,passWord})
  .then((db)=>{
    if(!db) return  res.send({err:-1,msg:'login nook'})
    rootList=db.rootList
     _id=db._id
     token =jwt.createToken({},60*60)
    return adminModel.updateMany({_id},{token})
  })
  .then((db)=>{
    res.send({err:0,msg:'ok',token,rootList,uid:_id})
  })
})
// 退出登录
router.post('/logout',(req,res)=>{
  let {uid} = req.body 
  let rootList=[]
  let token=null
  adminModel.updateMany({_id:uid},{token:''})
  .then(()=>{
    res.send({err:0,msg:'logout ok'})
  })
})
module.exports=router