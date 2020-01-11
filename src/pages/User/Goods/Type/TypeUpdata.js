import React,{Component} from 'react'
import {Button,Card,message,Form,Input} from 'antd'
import {UpdateTypeGoods} from '../../../../api/goods'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
import styles from './Upstyle.module.less'
class TypeAdd extends Component{
  constructor(props){
    super()
    this.state=props.updataData
  }
  componentWillReceiveProps(props,state){
    let {_id,Num,name} = props.updataData
    this.setState({_id,Num,name})
  }
  updataType=()=>{
    // console.log('aaa',this.state.getTableData);
    console.log('wdww',this);
    
    let {_id,Num,name} = this.state
      UpdateTypeGoods(_id,Num,name).then((res)=>{
      console.log('修改',this.props);
      this.props.setDrawerShow(false)
      this.props.setUpShow(false)
      message.success('修改成功')
      window.location.reload()
      
    })
    .catch((err)=>{
      console.log('err',err);
      
      console.log('修改失败',this.props);
      message.error('修改失败')
      this.props.setDrawerShow(false)
    })

  }
  render(){
    let {_id,Num,name}=this.state
    return(
      <Card title='修改类别名称' className={styles.tyupstyle}>
      id:{_id}<br/>
      类名编号:<Input type='text' value={Num} onChange={(e)=>{
        let value = e.target.value
        this.setState({Num:value})
      }}/><br/>
      类别名称:<Input type='text' value={name} onChange={(e)=>{
        let value = e.target.value
        this.setState({name:value})
      }}/><br/>
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