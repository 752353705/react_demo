import React,{Component,Fragment} from 'react'
import { Form, Input, Select, Button } from 'antd';
import {columns,data} from './StockData'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreatore from '../../../../store/ActionCreatore'
const { Option } = Select;

class StockHead extends Component{
  constructor(){
    super()
    this.state={
      shopNumber:[],
      DrawerShow:false
    }
  }
  componentDidMount(){
    setTimeout(()=>{
     let arr = []
    data.map((item)=>{
      arr.push({KCode:item.KCode,
        shopCode:item.shopCode})
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
  // componentWillReceiveProps(){
  //   this.setState({DrawerShow:true})
  // }
  render(){
    let {getFieldDecorator}=this.props.form
    return(
      <Fragment>
        <div style={{ width: '70%'}}>
          {getFieldDecorator('select',{})(<Select
          setFieldsValue='商品编号'
          placeholder='商品编号'
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
        <Button style={{ width: '30%' }} value='添加商品' onClick={()=>{
          // stort.dispath(ActionCreatore.setDrawerShow(true))
          
        console.log(this.props);
        this.props.setDrawerShow(true)
          // this.props.openDrawer()
        }}>添加商品</Button>
        </div>
      </Fragment>
    )
  }
}
export default connect(state=>state,(dispath)=>{
return bindActionCreators(ActionCreatore,dispath)
})(Form.create({})(StockHead))  