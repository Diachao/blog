/*
 * @Author: your name
 * @Date: 2022-04-13 15:52:11
 * @LastEditTime: 2022-07-11 16:13:07
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \作业\blog\modules\Http.js
 */
import store from 'store/dist/store.legacy';
import ROUT_MAP  from '../config/api.config.js'
import base  from '../config/base.config.js'
import instance from './common.js'
import encrypt from '../util/encrypt.js'
const {TAKEN_NAME} = base

export default async function Http({
  type,
  data
}) {
  // console.log(type,data)
  //如果地址信息不在ROUT_MAP里面则return false
  if (!(type in ROUT_MAP)) {
    return new Error('API请求错误')
  }
  let {
    url,
    setToken,
    method,
    rsaKey = false,
    Notoken = false,
    rest = false
  } = ROUT_MAP[type]
  try {
    method = method.toLowerCase()
    //查询文章id时将id拼接到地址上
    if (rest) {
      let restSymbol = url.match(/:(.*)$/)[1]
      url = url.replace(/:(.*)$/, data[restSymbol])
    }
    if (rsaKey && data[rsaKey]) {
      data[rsaKey] = await encrypt(data[rsaKey])
    }
    //params是url地址上一起传的参数
    data = method == 'get' ? {
      params: data
    } : data
    let result = await instance[method](url, data)
    if (setToken) {
      let token = result.token;
      let uid = result.userId
      store.set('uid', uid)
      store.set(TAKEN_NAME, token)
      this.$store.dispatch('login')
    }
    return result
  } catch (err) {
    if (err.response) {
      let message = err.response.data.message
      if (!Notoken) {
        this.$notify.error({ //由于http被挂载到VUE上,所以这里的this指向是vue实例
          title: '错误',
          message
        });
      }
    }
    return Promise.reject(err);
  }
}
