import State from './State'
import * as types from './action-types'
import Type from '../pages/User/Goods/Type/Type';
export default (prevState=State,actions)=>{
  let newData = JSON.parse(JSON.stringify(prevState))
  let {type,params} = actions;
  // console.log('redux中的',params);
  switch (type) {
    case types.SET_TOKEN_MODAL:
      newData.tokenModal = params
      break;
    case types.SET_DRAWERSHOW:
      newData.drawerShow = params
      break;
    case types.SET_UPSHOW:
      newData.UpShow = params
      break;
    default:
      break;
  }
  console.log('修改后数据');
  
  return newData
}