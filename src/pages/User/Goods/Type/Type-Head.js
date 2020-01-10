import React,{Component,Fragment} from 'react'
import { Form, Input, Select, Button } from 'antd';
import {columns,data} from './TypesData'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
const { Option } = Select;
class TypeHead extends Component{
  constructor(){
    super()
    this.state={
      shopNumber:[]
    }
  }
  componentDidMount(){
    setTimeout(()=>{
     let arr = []
    data.map((item)=>{
      arr.push({KCode:item.Key,
        shopCode:item.Num})
    })
    this.setState({shopNumber:arr})
    // console.log(this.state.shopNumber); 
    console.log(this);
    
    },500)
  }
  input=()=>{
    // 调用ajax接口,回来值之后进行操作
    setTimeout(()=>{
     let {getFieldsValue,validateFields} = this.props.form 
    console.log(getFieldsValue())
    // let {validateFields} = this.props.form
    // console.log(validateFields()); 
    },500)
    
    
  }
  select=()=>{
     // 调用ajax接口,回来值之后进行操作
    setTimeout(()=>{
      let {getFieldsValue,validateFields} = this.props.form 
    console.log(getFieldsValue())
    },500)
    
  }

  render(){
    let {getFieldDecorator}=this.props.form
    return(
      <Fragment>
        <div style={{ width: '70%'}}>
          {getFieldDecorator('select',{})(<Select
          setFieldsValue='类名编号'
          placeholder='类名编号'
          style={{ width: '30%', marginRight: '3%' }}
          onChange={this.select}
        >
          {
            this.state.shopNumber.map((item)=>{
            return <Option key={item.KCode}
            value={item.shopCode}>{item.shopCode}</Option>
            })
          }
        </Select>)}
        
          {getFieldDecorator('input',{})(<Input
          type="text"
          placeholder='搜索商品'
          style={{ width: '32%', marginRight: '3%' }}
          onInput={this.input}
        />)}
        <Button style={{ width: '30%' }} value='添加类别' onClick={()=>{
          this.props.setDrawerShow(true)
        }}>添加类别</Button>
        </div>
      </Fragment>
    )
  }
}
export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreatore,dispath)
  })(Form.create({})(TypeHead)) 