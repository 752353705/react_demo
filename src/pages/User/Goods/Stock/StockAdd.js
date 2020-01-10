import React,{Component} from 'react'
import {Button,Card,message,Form,Input} from 'antd'
import {AddGoods} from '../../../../api/goods'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
class StockAdd extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      price:'',
      img:null,
      foodType:'',
      desc:''
    }
  }
  addStock=()=>{
    AddGoods(this.state).then((res)=>{
      console.log('添加',this.props);
      // this.props.closeDrawer()
      message.success('添加成功')
      this.props.setDrawerShow(false)
    })
    .catch((err)=>{
      console.log('添加失败',this.props);
      // this.props.closeDrawer()
      message.error('添加失败')
      this.props.setDrawerShow(false)
    })
  }
  render(){
    let {getFieldDecorator} = this.props.form
    return(
      <Card title='添加产品'>
        库存编号:{getFieldDecorator('库存编号',{rules:[{required:true}]},<Input type='text' placeholder='请填写库存编号'/>)}<br/>
        商品编号:{getFieldDecorator('商品编号',{rules:[{required:true}]},<Input type='text' placeholder='请填写商品编号'/>)}<br/>
        商品名称:{getFieldDecorator('商品名称',{rules:[{required:true}]},<Input type='text' placeholder='请填写商品名称'/>)}<br/>
        库存数量:{getFieldDecorator('库存数量',{rules:[{required:true}]},<Input type='text' placeholder='请填写库存数量'/>)}<br/>
        <Button onClick={this.addStock}>添加</Button>
      </Card>
    )
  }
}
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreatore,dispath)
  })(Form.create({})(StockAdd))