<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-24 16:58:33
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:15
 * @FilePath: \Vue第三十四天 Vue高级  Vue  vue-blog vant导航 文章列表\司文超--vue---第三十三天\vue-blog\src\components\mobile\mhome\Tabbar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-tabbar v-model="active"
              route>
    <van-tabbar-item icon="home-o"
                     :to="{name:'mArticleList'}">首页</van-tabbar-item>
    <van-tabbar-item icon="search"
                     :to="{name:'mColumn'}">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o"
                     :to="{name:'mUser'}">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'VantTabbar',

  data () {
    return {
      active: 0
    };
  },

  mounted () {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>