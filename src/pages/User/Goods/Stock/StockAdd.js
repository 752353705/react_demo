import React,{Component} from 'react'
import {Button,Card,message,Form,Input} from 'antd'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
import {AddStockGoods,goodsStock} from '../../../../api/goods'
class StockAdd extends Component{
  addStock=()=>{
    console.log('传',this.props);
    let {validateFields} = this.props.form 
    validateFields((err,data)=>{
      if(err){
        message.error('用户输入有误,请重试')
      }else{
      let {KCode,shopCode,shopName,KNum}=data
      AddStockGoods(KCode,shopCode,shopName,KNum).then((res)=>{
        message.success('添加成功')
        goodsStock().then((res)=>{
          console.log('添加成的数据',res);
        })
        this.props.setDrawerShow(false)
      }).catch((err)=>{
        message.success('添加失败')
        this.props.setDrawerShow(false)
      })
      KCode=''
      shopCode=''
      shopName=''
      KNum=''
      }
    })
  }
  render(){
    let {getFieldDecorator} = this.props.form
    return(
      <Card title='添加产品'>
         <Form.Item>
         库存编号:
          {getFieldDecorator('KCode', {
            rules: [{ required: true, message: '库存编号不能为空!' }]
          })(
            <Input type='text'
            placeholder='请填写库存编号'
            />,
          )}
        </Form.Item>
        <Form.Item>
        商品编号:
          {getFieldDecorator('shopCode', {
           rules: [{ required: true, message: '商品编号不能为空!' }]
          })(
            <Input
            type='text' placeholder='请填写商品编号'
            />,
          )}
        </Form.Item>
        <Form.Item>
        商品名称:
          {getFieldDecorator('shopName', {
           rules: [{ required: true, message: '商品名称不能为空!' }]
          })(
            <Input
              type='text'
              placeholder="请填写商品名称"
            />,
          )}
        </Form.Item>
        <Form.Item>
        库存数量:
          {getFieldDecorator('KNum', {
           rules: [{ required: true, message: '库存数量不能为空!' }]
          })(
            <Input
              type='text'
              placeholder="请填写库存数量"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary"
          className="login-form-button" onClick={this.addStock}>
            添加
          </Button>
        </Form.Item>
      </Card>
    )
  }
}
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreatore,dispath)
  })(Form.create({})(StockAdd))