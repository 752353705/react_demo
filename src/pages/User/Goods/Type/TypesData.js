import React from 'react'
import {Icon} from 'antd'

export const columns = [
  {
    title: '类名编号',
    dataIndex: 'Num',
    render: text => <a>{text}</a>,
  },
  {
    title: '类名别称',
    className: 'name',
    dataIndex: 'name',
  },
  {
    title: '编辑',
    dataIndex: 'change',
  },
];

export const data = [
  {
    key: '1',
    Num: 'A1',
    name: '餐巾纸',
    change: <div><Icon type="form" /><Icon type="close-circle" /></div>,
  },
  {
    key: '2',
    Num: 'A2',
    name: '洗衣粉',
    change: <div><Icon type="form" /><Icon type="close-circle" /></div>,
  },
  {
    key: '3',
    Num: 'A3',
    name: '洗洁精',
    change: <div><Icon type="form" /><Icon type="close-circle" /></div>,
  },
];