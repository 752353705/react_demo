import axios from '../utils/axios'

// 添加
export const addCountShop = async(obj)=>{
  let res = await axios.post('/hehe/v1/admin/shop/addshop',{...obj})
  if(res.err != 0){
    throw res
  }
  return res
}

// 按照时间 筛选 商品
export const getShopsByTime = async(page,pageSize,startTime,endTime)=>{
  let res = await axios.post('/hehe/v1/admin/shop/getShopsByCtime',{page,pageSize,startTime,endTime})
  if(res.err != 0){
    throw res
  }
  return res
}

// 更新
export const getData = async (nowPage,pageSize) => {
  let res = await axios.post('hehe/v1/admin/shop/getShops',{nowPage,pageSize})
  if(res.err != 0){
    throw res
  }
  return res
}

// 删除
export const delShop = async (_id) => {
  let res = await axios.post('/hehe/v1/admin/shop/delShop',{_id})
  if(res.err !== 0){
    throw res
  }
  return res
}