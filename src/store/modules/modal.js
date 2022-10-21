/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-22 23:25:15
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-06-27 21:52:02
 * @FilePath: \Vue第二十一天 Vue高级  Vue  vue-blog\司文超--vue---第二十天\vue-blog\src\store\modules\modal.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  namespaced: true,
  state: {
    isShow: false,
    type: ''
  },
  getters: {},
  mutations: {
    OPEN(state) {
      state.isShow = true
    },
    CLOSE(state) {
      state.isShow = false
    },
    CHANGE_TYPE(state, payload) {
      state.type = payload.type
    }
  },
  actions: {
    close({
      commit
    }) {
      commit('CLOSE')
    },
    open({
      commit
    }, type) {
      commit('CHANGE_TYPE', {
        type
      })
      commit('OPEN')
    },
    confirm({
      commit
    }) {
      console.log('提交')
      commit('CLOSE')
    }
  },
}