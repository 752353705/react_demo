import React,{Component} from 'react'
import { Form,Card, Icon, Input, Button, message } from 'antd';
import styles from './Login.module.less'
import {UserLogin} from '../../api/user'
import {withRouter} from 'react-router-dom'
import {getItem,setItem} from '../../utils/webStorage'

class Login extends Component{
  componentDidMount(){
    // console.log('挂载了')
    if(getItem('token')){
      // console.log('进行了判断')
      this.props.history.replace('/admin/home')
    }
  }
  login=()=>{
   let {getFieldsValue,validateFields} = this.props.form 
    console.log(validateFields());
    validateFields((err,data)=>{
      if(err){
        message.error('用户输入有误,请重试')
      }else{
        // 成功发起网络请求
        let {userName,passWord} = data
        UserLogin(userName,passWord).then((res)=>{
          console.log(res);
          setItem("token",res.token)
          setItem('uid',res.uid)
          setItem('rootIds',res.rootList)
          message.success('登录成功1s后跳转首页',1,()=>{
            this.props.history.replace('/admin/home')
          })
        })
        .catch((err)=>{
          message.error(err.msg)
        })
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className={styles.login}>
        <Card>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '用户名不能为空!' },
            { min:3 , message: '最小长度为3个字符!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passWord', {
           rules: [{ required: true, message: '密码不能为空!' },
           { min:3 , message: '最小长度为3个字符!' },
           { max: 9, message: '最大长度为9个字符!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary"
          className="login-form-button" onClick={this.login}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Card>
        </div>
    )
  }
}
export default Form.create({})(withRouter(Login)) 