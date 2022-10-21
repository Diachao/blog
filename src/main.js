/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 21:02:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-30 14:56:55
 * @FilePath: \vue-blog\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
//vant 和 element ui有一个需要按需引入
import '@/plugins/vant.js'
import '@/plugins/http.js'
import '@/plugins/element.js'
import '@/plugins/vuescroll.js'


import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/base.styl'
import '@/assets/css/element.styl'
import 'element-ui/lib/theme-chalk/display.css';
import 'github-markdown-css/github-markdown.css';

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()
// Vue.prototype.$_ = _
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')