/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 10:03:47
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-12 09:39:44
 * @FilePath: \Vue第二十二天 Vue高级  Vue  vue-blog http封装 登录状态\司文超--vue---第二十二天\vue-blog\src\plugins\http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from '../api/http.js'
import Vue from 'vue'
const install = function (Vue) {
  if (install.installed) return //如果这个插件存在则不再创建
  install.installed = true
  Object.defineProperties(Vue.prototype, {
    $api: {
      get () {
        return http
      },
      enumerable: false, // 不可枚举
      configurable: false // 不可重写
    }
  })
}

Vue.use(install)