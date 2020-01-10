import React,{Component} from 'react'
import {Button,Card,message,Form,Input} from 'antd'
import {AddGoods} from '../../../../api/goods'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
import styles from './Upstyle.module.less'
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
  updataType=()=>{
    AddGoods(this.state).then((res)=>{
      message.success('添加成功')
      this.props.setUpShow(false)
    })
    .catch((err)=>{
      message.error('添加失败')
      this.props.setUpShow(false)
    })
  }
  render(){
    let {getFieldDecorator} = this.props.form
    return(
      <Card title='修改类别名称' className={styles.tyupstyle}>
        {/* id:{_id}<br/> */}
        类名编号:{getFieldDecorator('类名编号',{rules:[{required:true}]},<Input type='text' placeholder='请填写类名编号'/>)}<br/>
        类别名称:{getFieldDecorator('类别名称',{rules:[{required:true}]},<Input type='text' placeholder='请填类别名称'/>)}<br/>
        <Button onClick={this.updataType}>修改</Button>
        <Button onClick={()=>{
          this.props.setUpShow(false)
        }}>退出修改</Button>
      </Card>
    )
  }
}
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreatore,dispath)
  })(Form.create({})(TypeAdd))