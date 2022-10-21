/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 21:44:24
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-10 21:46:04
 * @FilePath: \Vue第二十二天 Vue高级  Vue  vue-blog http封装 登录状态\司文超--vue---第二十二天\vue-blog\src\core\minxin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
export default {
    methods: {
      refreshModal (type) {
        this.$store.dispatch('modal/open', type)
      }
    }
}
