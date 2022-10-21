/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 00:33:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 14:38:54
 * @FilePath: \Vue第三十九天 Vue高级  Vue  vue-blog mobile 信息修改 打包优化\司文超--vue---第三十八天\vue-blog\src\config\api.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  'register': {
    url: '/admin/register',
    setToken: true,
    method: 'post',
    rsaKey: 'password'
  },
  'login': {
    url: '/admin/login',
    setToken: true,
    method: 'post',
    rsaKey: 'password'
  },
  'index': {
    url: '/index',
    method: 'get',
    //不需要token就能直接进入
    // Notoken: true,
  },
  "columns": {
    url: '/api/rest/columns',
    method: 'get'
  },
  'getPukey': {
    url: '/keys',
    method: 'get'
  },
  'articles': {
    url: '/api/rest/articles',
    method: 'get'
  },
  'articleById': {
    url: '/api/rest/articles/:id',
    rest: true,
    method: 'get'
  },
  'getUserInfo': {
    url: '/user',
    method: 'GET',
  },
  'postArticle': {
    url: '/api/rest/articles',
    method: 'POST'
  },
  'postComment': {
    url: '/api/rest/comments',
    method: 'POST'
  },
  "postColumn": {
    url: '/api/rest/columns',
    method: 'POST'
  },
  "putUserInfo": {
    url: '/user',
    method: 'PUT'
  },
  "uploadUserAvatar": {
    url: '/upload/user',
    method: 'POST'
  },
  "likes": {
    url: '/likes/:id',
    method: 'POST',
    rest: true,
  },
}