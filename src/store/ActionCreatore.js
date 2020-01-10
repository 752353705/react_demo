import * as types from './action-types'
export default {
  setTokenModal(params=true){
    return {
      type:types.SET_TOKEN_MODAL,
      params:params
    }
  },
  setDrawerShow(params=false){
    return {
      type:types.SET_DRAWERSHOW,
      params:params
    }
  },
  setUpShow(params){
    return {
      type:types.SET_UPSHOW,
      params:params
    }
  }
}