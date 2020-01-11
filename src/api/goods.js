import axios from '../utils/axios'
// 库存显示列表接口
export const goodsStock = async(page=1,pageSize=3)=>{
  let res = await axios.post('/hehe/v1/admin/shop/getstock',{page,pageSize})
  if(res.err !== 0){
    throw res
  }
  return res
}
// 库存管理添加接口
export const AddStockGoods = async(KCode,shopCode,shopName,KNum)=>{
  let res = await axios.post('/hehe/v1/admin/shop/addstock',{KCode,shopCode,shopName,KNum})
  if(res.err !== 0){
    throw res
  }
  return res
}


// 品类显示列表接口
export const goodsType = async(page=1,pageSize=5)=>{
  let res = await axios.post('/hehe/v1/admin/shop/gettype',{page,pageSize})
  if(res.err !== 0){
    throw res
  }
  return res
}
// 品类管理添加接口
export const AddTypeGoods = async(Num,name)=>{
  let res = await axios.post('/hehe/v1/admin/shop/addtype',{Num,name})
  if(res.err !== 0){
    throw res
  }
  return res
}
// 品类管理删除接口
export const DelTypeGoods = async(id)=>{
  let res = await axios.post('/hehe/v1/admin/shop/deltype',{id})
  if(res.err !== 0){
    throw res
  }
  return res
}
// 品类管理修改接口
export const UpdateTypeGoods = async(_id,Num,name)=>{
  let res = await axios.post('/hehe/v1/admin/shop/updatetype',{_id,Num,name})
  if(res.err !== 0){
    throw res
  }
  return res
}