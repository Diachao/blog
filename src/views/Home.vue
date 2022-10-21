<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 00:33:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-30 14:41:55
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog">
    <el-container class="blog-container">
      <BaseHead />
      <el-container class="blog-middle ">
        <BaseSilde v-if="isLogin"
                   class='hidden-sm-and-down' />
        <el-main class="blog-main">
          <!-- 这里的ArticleList是组件的 -->
          <!-- <keep-alive :include="['VueBlogArticleList']"> -->
          <vueScroll ref="scroll"
                     @handle-scroll="handleScroll">

            <router-view v-if="isRouteChange"
                         :loading='loading'></router-view>

          </vueScroll>
          <!-- </keep-alive> -->
          <Menu :menuName="menuName"
                v-if="hasMenu" />
        </el-main>
      </el-container>
      <el-footer class="blog-footer"></el-footer>
    </el-container>
    <BaseModal />
    <Live2d />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseModal from '@/components/base/BaseModal'
import BaseHead from '@/components/base/BaseHead'
import BaseSilde from '@/components/base/BaseSilde'
import Menu from '@/components/menu/Menu'
import Live2d from '@/components/Live2d'
import MENU_MAP from '@/config/menu.config.js'
import _throttle from 'lodash/throttle'
const TH = 200;
export default {
  name: 'HomeView',
  components: {
    BaseModal, BaseHead, BaseSilde, Menu, Live2d
  },
  provide () {
    return {
      closeLoad: this.closeLoad,
    }
  },
  data () {
    return {
      loading: false,
      scrollTop: 0,
      isRouteChange: true
    };
  },
  watch: {
    $route () {
      this.isRouteChange = false
      this.loading = true
      this.$nextTick(() => {
        this.isRouteChange = true
      });
    }
  },
  computed: {
    menuName () {
      return this.$route.name
    },
    hasMenu(){
    return MENU_MAP[this.menuName]
    },
    isLogin () {
      return this.$store.state.token
    }
  },
  methods: {
    //throttle是节流函数
    handleScroll: _throttle(function (vertical, horizontal, nativeEvent) {
      console.log(1111)
      this.scrollTop = vertical.scrollTop
      if (this.loading) {
        return false
      }
      let vt = vertical.scrollTop
      let sh = nativeEvent.srcElement.scrollHeight - nativeEvent.srcElement.clientHeight
      if (vt + TH > sh) {
        this.loading = true
      }
    }, 500, false),
    closeLoad () {
      this.loading = false
    }
  }

  /* 
   1.点击 x 号 校验提示应该消失
   2.articleList滚动条在离开页面再次回来时需要返回到上次的离开位置
   3.优化：聊天室滚动条？？
  */
}
</script>
<style lang='stylus'>
.blog-container {
  overflow: hidden;
  height: 100%;
  background-color: #EFEBDC;
}

.blog-middle {
  max-width: 1440px;
  height: calc(100vh - 97.5px - 10vh);
  margin: 0 auto;
  background-color: #EFEBDC;
}

.el-main.blog-main {
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
}

// ::-webkit-scrollbar{
// display:none;//使用默认的滚动条
// }
.el-card__body {
  background-color: #EEEBDC;
}

.blog-footer {
  height: 0;
}
</style>
