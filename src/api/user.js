import axios from '../utils/axios'
// 邮箱验证码
export const UserMail = async(mail)=>{
  let res = await axios.post('/hehe/v1/admin/user/getMailCode',{mail})
  if(res.err !== 0){
    throw res
  }
  return res
}
// 注册接口
export const UserReg = async(userName,passWord,code)=>{
  let res = await axios.post('/hehe/v1/admin/user/reg',{userName,passWord,code})
  if(res.err !== 0){
    throw res
  }
  return res
}
// 登录接口
export const UserLogin = async(userName,passWord)=>{
  let res = await axios.post('/hehe/v1/admin/user/login',{userName,passWord})
  if(res.err !== 0){
    throw res
  }
  return res
}
// 退出接口
export const UserLogOut = async(uid)=>{
  let res = await axios.post('/hehe/v1/admin/user/logout',{uid})
  if(res.err !== 0){
    throw res
  }
  return res
}