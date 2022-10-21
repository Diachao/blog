<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 21:39:15
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 20:34:12
 * @FilePath: \Vue第二十二天 Vue高级  Vue  vue-blog http封装 登录状态\司文超--vue---第二十二天\vue-blog\src\components\user\UserLoginHead.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-avatar">
    <el-image class='blog-user--avater'
      :src="src"></el-image>
      <i class="fa fa-sign-out blog-log--out" @click="logOut"></i>
  </div>
</template>

<script>
export default {
  name: 'VueBlogHttpUserLoginHead',
  data() {
    return {
      
    };
  },
 computed:{
  src(){
    return this.$store.getters?.userInfo.avatar
  }
 },
  mounted() {
    
  },

  methods: {
    logOut(){
      this.$store.dispatch('logout');
    }
  },
};
</script>

<style >
.blog-user--avater{
  width:60px;
  height:60px;
  margin-right: 10px;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 50%;

}
.blog-avatar .blog-log--out{
  font-size: 32px;
  vertical-align: middle;
  cursor:pointer;
}
</style>