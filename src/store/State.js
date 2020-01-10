import {getItem} from '../utils/webStorage'
export default {
  tokenModal:getItem('token')?false:true,
  drawerShow:false,
  UpShow:false
}