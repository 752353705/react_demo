import React,{Component} from 'react'
// <<<<<<< HEAD
// // import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'


// // import Home from '../pages/Home/Home'
// // import Login from '../pages/Login/Login'
// // import Admin from '../pages/Admin/admin'
// import InventoryBinding from '../pages/User/InventoryBinding'
// import Discounts from '../pages/User/Discounts'

// =======
import {HashRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import Login from '../pages/Login/login'
import Admin from '../pages/Admin/admin'
import Home from '../pages/Home/Home'
import User from '../pages/User/User'
import Inventory from '../pages/User/InventoryBinding'
import Activity from '../pages/User/Discounts'
import Stock from '../pages/Goods/Stock'
import Type from '../pages/Goods/Type'
// >>>>>>> 2689918bc34e4b3885e4b81337f11e1be63bcdab
class Router extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
        {/* 路由 */}
        <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' render={()=>{
          return(
            <Admin>
              <Redirect exact from='/admin' to='/admin/home'></Redirect>
              {/* 首页 */}
              <Route path='/admin/home' component={Home}></Route>
              {/* 用户管理 */}
              <Route path='/admin/user' component={User}></Route>
              {/* 商品管理 */}
              <Route path='/admin/goods/stock' component={Stock}></Route>
              <Route path='/admin/goods/type' component={Type}></Route>
              <Route path='/admin/Discounts' component={Activity}></Route>
              {/* 盘点管理 */}
              <Route path='/admin/InventoryBinding' component={Inventory}></Route>
            </Admin>
          )
        }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default Router
