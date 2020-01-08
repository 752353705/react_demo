import React from 'react'
import locale from 'antd/es/date-picker/locale/zh_CN';
import { DatePicker } from 'antd';
import { Component } from 'react';

const { RangePicker } = DatePicker;

class Time extends Component{ 
  render(){
    return(
      <div>
      <DatePicker
        locale={locale}
        dateRender={current => {
          const style = {};
          if (current.date() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
          }
          return (
            <div className="ant-calendar-date" style={style}>
              {current.date()}
            </div>
          );
        }}
      />
      <RangePicker
        locale={locale}
        dateRender={current => {
          const style = {};
          if (current.date() === 1) {
            style.border = '1px solid #1890ff';
            style.borderRadius = '50%';
          }
          return (
            <div className="ant-calendar-date" style={style}>
              {current.date()}
            </div>
          );
        }}
      />
    </div>
)
  }
  }
export default Time
