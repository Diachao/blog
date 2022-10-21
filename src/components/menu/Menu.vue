<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-13 15:03:15
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:32
 * @FilePath: \Vue第二十五天 Vue高级  Vue  vue-blog Scroll优化 文章编辑\司文超--vue---第二十四天\vue-blog\src\components\menu\Menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <quick-menu :menu-count="count"
              :icon-class="icons"
              :menu-url-list="menuList"
              :position='position'
              :color="color"
              @process="print">
    {{menuList}}
  </quick-menu>
</template>

<script>
import MENU_MAP from '@/config/menu.config.js'
import quickMenu from 'vue-quick-menu'
import 'font-awesome/css/font-awesome.min.css'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('likes')
export default {
  name: 'VueBlogScrollMenu',
  components: {
    quickMenu
  },
  data () {
    return {
      backgroundColor: '#17c4c5',
      color: "#fff",
      position: 'top-right',
      isOpenNewTab: false,
    }
  },
  props: {
    menuName: {
      type: String
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters(["isLike"]),
    count () {
      return MENU_MAP?.[this.menuName]?.count
    },
    icons () {
      let list = MENU_MAP?.[this.menuName]?.icons
      if (this.menuName === 'article') {
        list[0] = this.isLike ? "fa fa-heart-o active" : "fa fa-heart-o "
      }
      return list
    },
    menuList () {
      return MENU_MAP?.[this.menuName]?.list
    }
  },

  methods: {
    ...mapActions(["pullLike", "pushLike", "sendLike"]),
    print (key) {
      if (this.menuList[key]?.key === 'like') {
        this.like()
        this[this.isLike ? "pullLike" : "pushLike"]()
        this.sendLike()
      }
      if (this.menuList[key]?.name) {
        this.$EventBus.$emit(this.menuList[key]?.name);
        return
      }
    },

    like () {
      this.liking = !this.liking
    }
  },
};
</script>

<style lang='stylus'>
.blog-main .quick-menu {
  position: absolute;
}

.active {
  color: red;
}
</style>