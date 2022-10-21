import store from 'store'
import base from '@/config/base.config.js'
import Vue from 'vue'
let {LIKES_USERS} =base
export default {
  namespaced: true,
  state: {
   likes:store.get(LIKES_USERS)||[],
   aid:""
  },
  getters: {
    isLike(state){
      return !!(state.likes.includes(state.aid))
    }
  },
  mutations: {
  CHANG_LIKES(state){
   state.likes=store.get(LIKES_USERS)
  },
  GET_AID(state,aid){
    state.aid=aid
  }
  },
  actions: {
    pushLike({commit,state}){
      let aid=state.aid
       if(!aid){
        return false
       }
       let likeList=state.likes
       let idx=likeList.indexOf(aid)
       if(idx===-1){
         likeList.push(aid)
       }
       store.set(LIKES_USERS,likeList)
       commit("CHANG_LIKES")
    },
    pullLike({commit,state}){
      let aid=state.aid
       if(!aid){
        return false
       }
       let likeList=state.likes
       let idx=likeList.indexOf(aid)
       if(idx !==-1){
         likeList.splice(idx,1)
       }
       store.set(LIKES_USERS,likeList)
       commit("CHANG_LIKES")
    },
    getAid({commit},payload){
      let {aid}=payload
        commit('GET_AID',aid)
    },
    async sendLike({state}){
      Vue.prototype.$api({type:"likes",data:{id:state.aid}})
    },
   getIsLike({state}){
      return !!(state.likes.includes(state.aid))
    }
  },
}