import React from 'react'
import locale from 'antd/es/date-picker/locale/zh_CN';
import { DatePicker } from 'antd';
import { Component } from 'react';

let time = []

class Time extends Component{ 

  //用于消除 月份中的 0
  changeMonth = (time) => {

    let newTime = time.split('-')
    // console.log('newTime',newTime)
    // console.log(newTime[1].split('')[1])
    // if(newTime[1].split('')[1] === 0){
    //   newTime[1] = newTime[1].substring(1,2)
    //   console.log('newTime',newTime)
    // }
    newTime[1] = newTime[1].split('')[1]
    // console.log('newTime',newTime)
    return newTime = '' + newTime[0] + newTime[1] + newTime[2]
  }


  // 当发生改变后 获取用户选择的时间
  onChange= (value,dateString) => {
    if(dateString != 0){
      dateString = this.changeMonth(dateString)
      time.push(dateString)
      if(time.length === 2){
        // 代表time 里已经储存了 两个 时间
        let t0 = Number(time[0].replace('-','').replace('-',''))
        let t1 = Number(time[1].replace('-','').replace('-',''))
        if(t0 > t1){
          // 让两个时间 从小到大排列
          let tmp = time[0] // time[0] 大的时间
          time[0] = time[1]
          time[1] = tmp
        }
        time = [t0,t1]
        this.props.changeTime(time)
        time = []
      }
    }
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
