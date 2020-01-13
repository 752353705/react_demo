import React from 'react'
import { Drawer, Form, Button, Col, Row, Input ,message} from 'antd';
import {withRouter} from 'react-router-dom'
import {addCountuser} from '../../../api/users'



class DrawerForm extends React.Component {
  state = { visible: false};

  addUser=()=>{
    let {getFieldsValue} = this.props.form
    let  newData = getFieldsValue()  
   


    addCountuser(newData)
    .then((res)=>{
     
      this.props.getinfo()
     
      console.log(this.props)
      message.success('添加成功')
    })
    .catch((err)=>{
      message.error('添加失败')
    })

  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    // this.setState({
    //   visible: false,
    // });
    this.props.setData()
  };

  render() {
    // console.log(this.props)
    let {data} = this.props;
    this.state = { visible: data};
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Drawer
          title="修改用户信息"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Uid编号">
                  {getFieldDecorator('uid', {
                    rules: [{ required: true, message: '请输入Uid编号' }],
                  })(<Input placeholder="请输入Uid编号" />)}
                </Form.Item>
              </Col>
              </Row>
              <Row gutter={16}>
              <Form.Item label="Name用户名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入Name用户名' }],
              })(
                <Input
                  style={{ width: '100%' }}
                  placeholder="请输入Name用户名"
                />,
              )}
            </Form.Item>
            </Row>
              <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="ID身份证">
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入ID身份证' }],
                  })(
                    <Input
                      style={{ width: '100%' }}
                      placeholder="请输入ID身份证"
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item label="Password">
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入Password' }],
                })(
                  <Input
                    style={{ width: '100%' }}
                    placeholder="请输入Password"
                  />,
                )}
              </Form.Item>
            </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="userRight权限">
                  {getFieldDecorator('jurisdiction', {
                    rules: [{ required: true, message: '请输入userRight权限' }],
                  })(
                    <Input placeholder="请输入userRight权限"/>
                  )}
                </Form.Item>
              </Col>
            </Row>
            
          </Form>
          <div
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              取消
            </Button>
            <Button onClick={this.onClose,this.addUser} type="primary">
              提交
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

 

export default Form.create({})(withRouter(DrawerForm));