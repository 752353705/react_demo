import axios from '../utils/axios'

export const UserLogin= async (userName,passWord)=>{
    // asyncs 函数 返回一个promise对象
    // 只要函数内部不出现错误 外部用then接受处理
    // then里接受的数据就是函数返回的数据
      let res = await axios.post('/hehe/v1/admin/user/login',{userName,passWord})
      if(res.err!==0){
        throw res
      }
      return res
  }