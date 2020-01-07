import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from'../Admin/admin.module.less'
import CustomNav from '../../components/CustomNav/CustomNav'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Admin extends Component{
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className={styles.admin}>
        {/* 头部,可以直接放一个组件 */}
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        {/* 左边侧边栏 */}
        <Sider width={200} style={{ background: '#fff' }}>
         <CustomNav></CustomNav>
        </Sider>
        {/* 右边侧边栏 */}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
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