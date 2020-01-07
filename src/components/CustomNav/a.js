import React,{Component} from 'react'
import { Menu, Icon } from 'antd';
import styles from './CustomNav.module.less'
import arr from './rootlist'
const { SubMenu } = Menu;
class CustomNav extends Component{
  render(){
    return(
      <Menu
      className={styles.menu}
      theme="dark"
      // onClick={this.handleClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
    <Menu.Item >
      <Icon type="setting" />
      <span>首页</span>
    </Menu.Item>
     <Menu.Item >
     <Icon type="setting" />
     <span>用户管理</span>
    </Menu.Item>
      <SubMenu
        key="sub4"
        title={
          <span>
            <Icon type="setting" />
            <span>商品管理</span>
          </span>
        }
      >
      <Menu.Item >
        <Icon type="setting" />
        <span>库存管理</span>
      </Menu.Item>
        <Menu.Item >
          <Icon type="setting" />
          <span>品牌管理</span>
        </Menu.Item>
        <Menu.Item >
          <Icon type="setting" />
          <span>折扣活动</span>
        </Menu.Item>
      </SubMenu>
      <Menu.Item >
        <Icon type="setting" />
        <span>盘点管理</span>
      </Menu.Item>
    </Menu>
    )
  }
}
export default CustomNav