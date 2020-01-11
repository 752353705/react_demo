const express = require('express')
const router = express.Router()
const Shop = require('../../control/shopController')

// 添加接口
router.post('/addShop',(req,res)=>{
  // 在商品管理下的折扣活动 添加折扣商品
  // 需要有 {商品编号,商品名称,商品价格,打折力度,折后价格}
  let {shopNum,shopName,shopPrice,Count,CountPrice} = req.body
  Shop.add(shopNum,shopName,shopPrice,Count,CountPrice)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    // console.log(err)
    res.send({err:-1,msg:'添加失败'})
  })
})

//删除接口
router.post('/delShop',(req,res)=>{
  let {_id} = req.body
  Shop.del(_id)
  .then((data)=>{
    res.send({err:0,msg:'删除ok'})
  })
  .catch((err)=>{
    res.send({err:-1,msg:'del nook'})
  })
}) 


// 修改数据接口
router.get('/updateShop',(req,res)=>{
  let {_id,shopNum,shopName,shopPrice,Count,CountPrice} = req.query
  Shop.update(_id,shopNum,shopName,shopPrice,Count,CountPrice)
  .then((data)=>{res.send({err:0,msg:'更新数据ok'})})
  .catch((data)=>{res.send({err:-1,msg:'更新数据失败'})})
})

// 获取数据接口
  // 分页查询接口
router.post('/getShops',(req,res)=>{
  // console.log(req.body)
  let page = Number(req.body.nowPage) || 1
  let pageSize = Number(req.body.pageSize) || 3
  Shop.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    // console.log(err)
    res.send({err:-1,msg:'查询失败'})
  })
})
  // 按照添加日期查询 + 分页
router.post('/getShopsByCtime',(req,res)=>{
  // console.log(req.body)
  let page = Number(req.body.page) || 1
  let pageSize = Number(req.body.pageSize) || 3
  let startTime = Number(req.body.startTime)
  let endTime = Number(req.body.endTime)
  // let startTime = req.body.startTime
  // let endTime = req.body.endTime


  Shop.getByCtime(startTime,endTime,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'按照日期查询ok',list:data})
  })
  .catch((err)=>{
    res.send({err:-1,msg:'按照日期查询失败'})
  })

})  


module.exports = router