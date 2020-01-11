import React,{Component} from 'react'
import { Form,Card, Icon, Input, Button, message } from 'antd';
import styles from './Login.module.less'
import {reg,getCode} from '../../api/user'
import {withRouter} from 'react-router-dom'

class Reg extends Component{

  Code=()=>{
    console.log('获取验证码')
       let {validateFields} = this.props.form 
        validateFields((err,data)=>{
        // 成功发起网络请求
        console.log('data',data)
            let {mail} = data
        
            getCode(mail).then((res)=>{
              message.success('验证码正在路上')
            })
            .catch((err)=>{
              message.error('验证码发送失败')
            })
          
        })

  }

  reg=()=>{
    console.log('注册')
   let {validateFields} = this.props.form 
    // console.log(getFieldsValue());
    validateFields((err,data)=>{
        let {mail,passWord,code} = data
        reg(mail,passWord,code).then((res)=>{
          console.log(res);
          message.success('注册成功',1,()=>{
            this.props.history.replace('/login')
          })
        })
        .catch((err)=>{
          message.error(err.msg)
        })
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className={styles.login}>
        <Card>
        <Form.Item>
          {getFieldDecorator('mail', {
            rules: [{ required: true, message: '用户名不能为空!' },
            { min:3 , message: '最小长度为3个字符!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="qq账号"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passWord', {
            rules: [{ required: true, message: '用户名不能为空!' },
            { min:3 , message: '最小长度为3个字符!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('code', {
           rules: [
           { min:3 , message: '最小长度为3个字符!' },
           { max: 9, message: '最大长度为9个字符!' }]
          })(
            <Input style={{ width: '57%'}} 
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
              placeholder="验证码"
            />,
            
            )}
            <Button type="primary"  style={{float: 'right' ,width: '40%'}}
          className="login-form-button" onClick={this.Code}>
            获取验证码
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary"
          className="login-form-button" onClick={this.reg}>
            注册
          </Button>
          
        </Form.Item>
      </Card>
        </div>
    )
  }
}
export default Form.create({})(withRouter(Reg)) 