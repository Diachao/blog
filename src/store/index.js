/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 21:04:19
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 21:18:43
 * @FilePath: \Vue第二十一天 Vue高级  Vue  vue-blog\司文超--vue---第二十天\vue-blog\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEm
 */
import Vue from 'vue'
import Vuex from 'vuex'
import modal from '@/store/modules/modal'
import router from '../router'
import likes from '@/store/modules/likes'
import base from '../config/base.config'
const {TAKEN_NAME} =base
import store from 'store'
import Http from '@/api/http'
import { io } from 'socket.io-client'
import isMobile from '@/util/isMobile.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:store.get(TAKEN_NAME) || '',
    userInfo : {},
    isMe:false
  },
  getters: {
    userInfo(state){
      if(state.token){
        return state.userInfo
      }
      return {}
    }
  },
  mutations: {
    SET_TOKEN(state){
      state.token=store.get(TAKEN_NAME)
    },
    REMOVE_TOKEN(state){
     state.token='',
     store.remove(TAKEN_NAME)
    },
    SET_USERINFO(state,userInfo){
      state.userInfo=userInfo
    }
  },
  actions: {
    logout({commit,state}){
      state.isMe=true
      Vue.prototype.$ws?.emit('leaveChat')
      Vue.prototype.$ws?.close()
      commit('REMOVE_TOKEN')
    },
    login({dispatch,commit}){
     commit('SET_TOKEN')
     dispatch('getUserInfo')
    },
    online({getters,commit,state}){
     Vue.prototype.$ws=io("ws://127.0.0.1:8000", { transports: ['websocket'] })
     let {nikname,_id}=getters.userInfo
     Vue.prototype.$ws.emit('online',{uid:_id,nikname})
     Vue.prototype.$ws.on('disconnect',()=>{
      Vue.prototype.$ws=null
      let message=`再见${getters?.userInfo.username}`
      if(!state.isMe){
       message='账号已在其他地方登录'
        commit("REMOVE_TOKEN")
      }
      Vue.prototype.$notify.success({
        title: '退出成功',
        message ,
      })
      state.isMe=false
      if(router.app._route.name!=='index'){
        router.replace("/index")
      }
     })
    },
    async getUserInfo({commit,dispatch},payload){
      try{
        let userInfo = await Http({type:'getUserInfo'})
        commit('SET_USERINFO',userInfo)
        if(!isMobile()){
          Vue.prototype.$notify.success({
            title: '登录成功',
            message: `欢迎你${userInfo.username}`,
          })
          console.log(payload)
          if(!payload?.upload){
            dispatch('online')
          }
        }
      }catch(err){
        console.log(err)
      }
    }
  },
  modules: {
    modal,likes
  }
})