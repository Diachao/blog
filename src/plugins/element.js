/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 09:40:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 20:28:01
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\plugins\element.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import {Input,Form,Upload,Image,Header,Row,Col,Menu,MenuItem,Dialog,Button,Aside,RadioGroup,RadioButton,Card,Container,Main,Footer,Notification,Message,FormItem}from 'element-ui';
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Upload)
Vue.use(Image)
Vue.use(Header)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Aside)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Card)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
// Vue.use(ElementUI, {
//   size: 'base', //设置默认字体大小
//   zIndex: 3000 //设置element-ui的定位的权重
// });