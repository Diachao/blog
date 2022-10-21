<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 00:33:04
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-27 20:06:37
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <MHeader />
    <div class="blog-m--content">
      <transition enter-active-class="animate__animated animate__fadeInRight"
                  appear
                  mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <Tabbar />
    <MModal />
  </div>
</template>

<script>
// @ is an alias to /src
import Tabbar from '@/components/mobile/mhome/Tabbar'
import MHeader from '@/components/mobile/mhome/MHeader'
import MModal from 'm/modal/MModal'
export default {
  name: 'MHome',
  components: {
    Tabbar, MHeader, MModal
  },
  data () {
    return {

    };
  },

  computed: {

  },
  methods: {

  }

  /* 

  */
}
</script>
<style lang='stylus'>
.blog-m--content {
  height: calc(100vh - 105px);
  overflow: hidden;
  overflow-y: auto;
}

.animate__fadeInRight {
  animation-duration: 0.5s;
}
</style>
