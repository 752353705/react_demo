import axios from '../utils/axios'
// 登录接口
export const UserLogin = async(userName,passWord)=>{
  let res = await axios.post('/hehe/v1/admin/user/login',{userName,passWord})
  if(res.err !== 0){
    throw res
  }
  return res
}