import React, { Fragment, Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './admin.module.less' 
import 'antd/dist/antd.css';


const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
class Admin extends Component {
  render(){
    return(
      <Layout className={styles.admin_layout}>
        <Header className={styles.admin_Header} >
          猫头鹰超市管理系统
        </Header>
    <Layout>
      <Sider width={200} >
        <Menu
          theme='dark'
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          className={styles.admin_Menu} 
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
            <Menu.Item key="9">库存管理</Menu.Item>
            <Menu.Item key="10">品类管理</Menu.Item>
            <Menu.Item key="11">折扣活动</Menu.Item>
          </SubMenu>
        <Menu.Item
            key="sub4"
            
          >
            <span>
              <Icon type="laptop" />
              盘点管理
            </span>
          </Menu.Item>    
        </Menu>


      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>

    )
  }
}

export default Admin
