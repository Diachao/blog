/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-13 15:52:58
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-18 09:16:50
 * @FilePath: \Vue第二十五天 Vue高级  Vue  vue-blog Scroll优化 文章编辑\司文超--vue---第二十四天\vue-blog\src\config\menu.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default{
  'index':{
    count:3,
    icons:["fa fa-user","fa fa-columns","fa fa-pencil"],
    list:[{'isLink':true,url:"/user"},
          {'isLink':true,url:"/column"},
          {'isLink':true,url:"/edit"}],
  },
  'article':{
    count:3,
    icons:["fa fa-heart-o","fa fa-star-o","fa fa-pencil-square-o"],
    list:[{'isLink':false,name:'likeArticle',key:"like"},
          {'isLink':false},
          {'isLink':false,name:'writeComments'},],
  },
  'column':{
    count:2,
    icons:["fa fa-plus","fa fa-minus"],
    list:[{'isLink':false,name:'addColumns'},
          {'isLink':false},],
  }
}