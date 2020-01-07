import React,{Component} from 'react'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'


import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Admin from '../pages/Admin/admin'
import InventoryBinding from '../pages/User/InventoryBinding'
import Discounts from '../pages/User/Discounts'

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
                <Switch>
                  <Redirect exact from='/admin' to='/admin/home'></Redirect>
                  <Route path='/admin/home' component={Home}></Route>
                  
                  {/* 与用户有关 */}
                  <Route path='/admin/InventoryBinding' component={InventoryBinding}></Route>  
                  <Route path='/admin/Discounts' component={Discounts}></Route>  
                </Switch>
              </Admin>
            )
          }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default Router
