<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-11 15:59:44
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:47
 * @FilePath: \Vue第二十三天 Vue高级  Vue  vue-blog 侧边栏 文章列表\司文超--vue---第二十三天\vue-blog\src\components\base\BaseHead.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-header height="12vh"
             class="blog-header">
    <el-row class="blog-header--row"
            :span="24">
      <el-col :span="2"
              :offset='1'
              :xs="6"
              :sm="6">
        <el-image class="blog-logo"
                  :src="require('@/assets/mouse.jpeg')"
                  fit="contain"></el-image>
      </el-col>
      <el-col :span="12"
              class="hidden-sm-and-down">
        <el-menu mode="horizontal"
                 router
                 class="blog-title"
                 ref='navMenu'
                 :default-active="activeIndex">
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/column">分类</el-menu-item>
          <el-menu-item index="/picture">图片</el-menu-item>
          <el-menu-item index="/user">个人信息</el-menu-item>
          <el-menu-item index="/socket">聊天</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4"
              :offset='1'
              :xs="8"
              :sm="8"
              class="blog-header--input">
        <Search />
      </el-col>
      <el-col :span="3"
              :offset='1'
              :xs="4"
              :sm="4">
        <component :is='loginCompantent'></component>
      </el-col>
    </el-row>

  </el-header>
</template>

<script>
import Search from '@/components/Search'
import UserLoginHead from '@/components/user/UserLoginHead'
import UserAvater from '@/components/user/UserAvater'
export default {
  name: 'VueBlogBaseHead',
  components: {
    Search, UserLoginHead, UserAvater
  },
  data () {
    return {

    };
  },
  created () {
    let isLogin = this.$store.state.token
    let username = this.$store.state.userInfo?.username
    if (isLogin && !username) {
      this.$store.dispatch('getUserInfo');
    }
  },
  mounted () {

  },
  computed: {
    loginCompantent () {
      return this.$store.state.token ? 'UserAvater' : 'UserLoginHead'
    },
    activeIndex () {
      return `/${this.$route.name}`
    }
  },
  methods: {

  }
};
</script>

<style >
.blog-header {
  display: flex;
  align-items: center;
  min-height: 96px;
  max-height: 256px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.blog-header--row {
  display: flex;
  align-items: center;
  width: 100%;
}

.blog-header--input {
  display: flex;
  align-items: center;
  height: 60px;
}

.blog-header .blog-title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0;
  color: #79bbff;
}

.blog-logo {
  width: 128px;
  height: 96px;
}

.blog-register,
.blog-login {
  padding: 0 12px;
  font-size: 14px;
  cursor: pointer;
}
</style>