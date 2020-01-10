import React,{Component} from 'react'
import {Button,Card,message,Form,Input} from 'antd'
import {AddGoods} from '../../../../api/goods'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
class TypeAdd extends Component{
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
      message.success('添加成功')
      this.props.setDrawerShow(false)
    })
    .catch((err)=>{
      console.log('添加失败',this.props);
      message.error('添加失败')
      this.props.setDrawerShow(false)
    })
  }
  render(){
    let {getFieldDecorator} = this.props.form
    return(
      <Card title='添加类别名称'>
        类名编号:{getFieldDecorator('类名编号',{rules:[{required:true}]},<Input type='text' placeholder='请填写类名编号'/>)}<br/>
        类别名称:{getFieldDecorator('类别名称',{rules:[{required:true}]},<Input type='text' placeholder='请填类别名称'/>)}<br/>
        <Button onClick={this.addStock}>添加</Button>
      </Card>
    )
  }
}
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreatore,dispath)
  })(Form.create({})(TypeAdd))