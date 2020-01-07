import axios from 'axios'
import {getItem} from './webStorage'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
 let token = getItem('token') || ''
 config.data.token = token
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  let list = [-996,-997,-998,-999]
  
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
export default axios