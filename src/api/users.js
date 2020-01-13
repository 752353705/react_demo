import axios from '../utils/axios'

export const userInfo= async (page,pageSize)=>{
    // asyncs 函数 返回一个promise对象
    // 只要函数内部不出现错误 外部用then接受处理
    // then里接受的数据就是函数返回的数据
      let res = await axios.post('/hehe/v1/admin/users/info',{page,pageSize})
      if(res.err!==0){
        throw res
      }
      return res
  }

  export const delInfo= async (_id,page)=>{
    // asyncs 函数 返回一个promise对象
    // 只要函数内部不出现错误 外部用then接受处理
    // then里接受的数据就是函数返回的数据
    console.log(page,"page")
    console.log(_id,"egyu")
      let res = await axios.post('/hehe/v1/admin/users/delusers',{_id,page})
      if(res.err!==0){
        throw res
      }
      return res
  }

//关键字查询
  export const valueInfo= async (value,page)=>{
    // asyncs 函数 返回一个promise对象
    // 只要函数内部不出现错误 外部用then接受处理
    // then里接受的数据就是函数返回的数据  
    
      let res = await axios.post('/hehe/v1/admin/users/usersByKw',{value,page})
      console.log(res,"deo")
      if(res.err!==0){
        throw res
      }
      return res
  }


  //分类查询
  export const typeInfo= async (value,page)=>{
    // asyncs 函数 返回一个promise对象
    // 只要函数内部不出现错误 外部用then接受处理
    // then里接受的数据就是函数返回的数据
    
      let res = await axios.post('/hehe/v1/admin/users/usersType',{value,page})
      if(res.err!==0){
        throw res
      }
      return res
  }


  //更新信息
  export const addCountuser = async(obj)=>{
    let res = await axios.post('/hehe/v1/admin/users/addusers',{...obj})
    if(res.err !== 0){
      throw res
    }
    return res
  }