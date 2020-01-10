import React from 'react'
import {Icon} from 'antd'

export const columns = [
  {
    title: '库存编号',
    dataIndex: 'KCode',
    render: text => <a>{text}</a>,
  },
  {
    title: '商品编号',
    dataIndex: 'shopCode',
  },
  {
    title: '商品名称',
    dataIndex: 'shopName',
  },
  {
    title: '库存数量',
    dataIndex: 'KNum',
  },
];

export const data = [
  {
    key: '1',
    KCode: 'A1',
    shopCode: 'A-0001',
    shopName:'清风餐巾纸',
    KNum:2590
  },
  {
    key: '2',
    KCode: 'A2',
    shopCode: 'A-0002',
    shopName:'心相印纸抽',
    KNum:2590
  },
  {
    key: '3',
    KCode: 'A3',
    shopCode: 'A-0003',
    shopName:'清风抽纸',
    KNum:2590
  },
  {
    key: '4',
    KCode: 'A3',
    shopCode: 'A-0003',
    shopName:'清风抽纸',
    KNum:2590
  },
  {
    key: '5',
    KCode: 'A3',
    shopCode: 'A-0003',
    shopName:'清风抽纸',
    KNum:2590
  },
  {
    key: '6',
    KCode: 'A3',
    shopCode: 'A-0003',
    shopName:'清风抽纸',
    KNum:2590
  },
  {
    key: '7',
    KCode: 'A3',
    shopCode: 'A-0003',
    shopName:'清风抽纸',
    KNum:2590
  }
];