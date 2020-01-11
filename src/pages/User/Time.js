import React from 'react'
import locale from 'antd/es/date-picker/locale/zh_CN';
import { DatePicker } from 'antd';
import { Component } from 'react';

let time = []

class Time extends Component{ 

  // 当发生改变后 获取用户选择的时间
  onChange= (value,dateString) => {
    time.push(dateString)
    
    if(time.length > 1){
      time = []
    }
    // this.props.timeData = [...time]
    console.log(this.props.timeData.push(1))
  }
  render(){
    return(
      <div>
        <DatePicker 
          locale={locale}
          onChange={this.onChange}
        />
        ~
        <DatePicker 
          locale={locale}
          onChange={this.onChange}
        />
    </div>
)
  }
  }
export default Time
