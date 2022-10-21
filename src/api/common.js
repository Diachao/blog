/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 09:54:42
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-14 09:47:54
 * @FilePath: \Vue第二十二天 Vue高级  Vue  vue-blog http封装 登录状态\司文超--vue---第二十二天\vue-blog\src\api\common.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';
import store from 'store/dist/store.legacy';
import base  from '../config/base.config.js'
const {TIMEOUT,TAKEN_NAME} =base

/*
1.在发送信息之前先获得公钥在拦截器进行密码加密
*/
//设置全局的axios默认地址 类似于Object.prototype 只有在设置之后的实例化才有 axios.defaults.baseURL==='http://127.0.0.1:3000'设置之前是没有的
// axios.defaults.baseURL = BASEURL;
let instance = axios.create({
  timeout: TIMEOUT,
  baseURL:process.env.VUE_APP_BASE_URL
})
instance.interceptors.request.use(async (config) => {
    let token = store.get(TAKEN_NAME)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  });
instance.interceptors.response.use((response) => {
  //剥离最外层
  let result = response.data
  return result?.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default instance