let arr=[
  {
    name:'首页',
    icon:'mail',
    path:'/home',
    id:'0'
  },
  {
    name:'用户管理',
    icon:'setting',
    id:'1',
    path:'/user'
  },
  {
    name:'商品管理',
    id:'2',
    children:[
      { 
        path:'/goods/stock',
        name:'库存管理',
        id:'2-0',
      },
      {
        name:'品类管理',
        path:'/goods/type',
        id:'2-1'
      },
      { 
        path:'/goods/activity',
        name:'折扣活动',
        id:'2-2',
      },
    ]
  },
  {
    name:'盘点管理',
    icon:'mail',
    path:'/inventory',
    id:'3'
  }
]


export default arr