import axios from '../utils/axios'

// 添加
export const addCountShop = async(obj)=>{
  let res = await axios.post('/hehe/admin/shop/addshop',{...obj})
  if(res.err != 0){
    throw res
  }
  return res
}

// 更新
export const getData = async (nowPage,pageSize) => {
  let res = await axios.post('hehe/admin/shop/getShops',{nowPage,pageSize})
  if(res.err != 0){
    throw res
  }
  return res
}

// 删除
export const delShop = async (_id) => {
  let res = await axios.post('/hehe/admin/shop/delShop',{_id})
  if(res.err !== 0){
    throw res
  }
  return res
}