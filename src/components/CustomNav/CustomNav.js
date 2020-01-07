import React,{Component} from 'react'
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;

class CustomNav extends Component{
  render(){
   return(
    <Menu
    theme='dark'
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
  >
    <Menu.Item
      key="sub1"
    >
      <span>
        <Icon type="user" />
        首页概况
      </span>
    </Menu.Item>

    <Menu.Item
      key="sub2"
    >
      <span>
        <Icon type="laptop" />
        用户管理
      </span>
    </Menu.Item>

    <SubMenu
      key="sub3"
      title={
        <span>
          <Icon type="notification" />
          商品管理
        </span>
      }
    >
      <Menu.Item key="9">
        库存管理
      </Menu.Item>
      <Menu.Item key="10">
        品类管理
      </Menu.Item>
      <Menu.Item key="11">
        <Link to={'/admin/Discounts'}>
          折扣活动
        </Link>
      </Menu.Item>
    </SubMenu>
    
    <Menu.Item
      key="sub4"
    >
      <Link to='/admin/InventoryBinding'>
        <span>
          <Icon type="laptop" />
          盘点管理
        </span>
      </Link>
    </Menu.Item>    
  </Menu>

   )
  }

}

export default CustomNav

