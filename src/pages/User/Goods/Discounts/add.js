import React from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Icon ,message} from 'antd';
import {withRouter} from 'react-router-dom'
import {addCountShop,getData} from '../../../../api/shop'

const { Option } = Select;


class DrawerForm extends React.Component {
  state = { visible: false};

  addShop=()=>{
    let {getFieldsValue} = this.props.form
    let  newData = getFieldsValue()  
    // newData 就是要添加的折扣商品
    // console.log(newData)
    addCountShop(newData)
    .then((res)=>{
      // console.log(res)
      // getData()
      // console.log('this.props',this.props)
      // let {nowPage} = this.props
      // console.log(nowPage)
      this.props.getTableDate()
      // this.props.changeNowPage()
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
    let {data} = this.props
    this.state = { visible: data};
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Drawer
          title="添加折扣商品"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="商品编号">
                  {getFieldDecorator('shopNum', {
                    rules: [{ required: true, message: '请输入折扣商品编号' }],
                  })(<Input placeholder="请输入折扣商品编号" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="商品名称">
                  {getFieldDecorator('shopName', {
                    rules: [{ required: true, message: '请输入商品名称' }],
                  })(
                    <Input
                      style={{ width: '100%' }}
                      placeholder="请输入商品名称"
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="商品价格">
                  {getFieldDecorator('shopPrice', {
                    rules: [{ required: true, message: '商品价格' }],
                  })(
                    <Input placeholder="请输入商品价格"/>
                      
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="打折力度">
                  {getFieldDecorator('Count', {
                    rules: [{ required: true, message: '请输入打折力度' }],
                  })(
                    <Input placeholder="请输入打折力度"/>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="折后价格">
                  {getFieldDecorator('CountPrice', {
                    rules: [{ required: true, message: '请输入折后价格' }],
                  })(
                    <Input placeholder="请输入折后价格"/>
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
              Cancel
            </Button>
            <Button onClick={this.onClose,this.addShop} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

 

export default Form.create({})(withRouter(DrawerForm));