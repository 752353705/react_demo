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



// 品类管理删除接口
export const DelGoods = async(id)=>{
  let res = await axios.post('/hehe/v1/admin/food/delFood',{id})
  if(res.err !== 0){
    throw res
  }
  return res
}
// 品类管理添加接口
export const AddGoods = async(obj)=>{
  let res = await axios.post('/hehe/v1/admin/food/addFood',{...obj})
  if(res.err !== 0){
    throw res
  }
  return res
}