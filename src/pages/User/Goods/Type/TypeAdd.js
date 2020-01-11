import React,{Component} from 'react'
import {Button,Card,message,Form,Input} from 'antd'
import {AddTypeGoods} from '../../../../api/goods'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
class TypeAdd extends Component{
  addStock=()=>{
    let {validateFields} = this.props.form 
    // console.log('validateFields',validateFields());
    console.log('添加页面获取的数据值',this.props);
    
    validateFields((err,data)=>{
      if(err){
        message.error('用户输入有误,请重试')
      }else{
        let {Num,name} = data
         AddTypeGoods(Num,name).then((res)=>{
      console.log('添加',this.props);
      message.success('添加成功')
      this.props.setDrawerShow(false)
      window.location.reload()
    })
    .catch((err)=>{
      console.log('添加失败',this.props);
      message.error('添加失败')
      this.props.setDrawerShow(false)
    })
      }
    })
   
  }
  render(){
    let {getFieldDecorator} = this.props.form
    return(
      <Card title='添加类别名称'>
        <Form.Item>
         类名编号:{getFieldDecorator('Num',{rules:[{required:true, message: '类名编号不能为空!'}]})(<Input type='text' placeholder='请填写类名编号'/>)} 
        </Form.Item>
        <Form.Item>
         类别名称:{getFieldDecorator('name',{rules:[{required:true, message: '类别名称不能为空!'}]})(<Input type='text' placeholder='请填类别名称'/>)} 
        </Form.Item>
        <Form.Item>
          <Button type="primary"
          className="login-form-button" onClick={this.addStock}>添加</Button>
        </Form.Item>   
      </Card>
    )
  }
}
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreatore,dispath)
  })(Form.create({})(TypeAdd))