/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 09:58:56
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-10 10:00:00
 * @FilePath: \Vue第二十二天 Vue高级  Vue  vue-blog http封装 登录状态\司文超--vue---第二十二天\vue-blog\src\util\encrypt.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE de
 */
import store from 'store/dist/store.legacy';
import base  from '../config/base.config.js'
import instance from '../api/common.js'
import JSEncrypt from 'jsencrypt';

const { PUB_KEY } =base
export default
 async function encrypt(value) {
  let publicKey = store.get(PUB_KEY);
  try {
    if (!publicKey || publicKey === 'undefined') {
      let result = await instance.get(`/keys`)
      publicKey = result.data.pubKey;
      publicKey = publicKey.replace(/\. +/g, '')
      publicKey = publicKey.replace(/[\r\n]/g, '');
      store.set(PUB_KEY, publicKey);
    }
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(value)
  } catch (err) {
    console.error(err)
  }
}