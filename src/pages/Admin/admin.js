import React,{ Fragment, Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from './admin.module.less' 
import CustomNav from '../../components/CustomNav/CustomNav'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import 'antd/dist/antd.css';



const { Header, Sider, Content } = Layout;
class Admin extends Component {
  render(){
    return(
      <Layout className={styles.admin}>
        <Header className={styles.admin_Header} >
        <HeaderNav></HeaderNav>
        </Header>
        
    <Layout>
      <Sider width={200} >
        <CustomNav></CustomNav>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>

          {/* 这里来动态显示当前所在路径 */}
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
          {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>

    )
  }
}

export default Admin
