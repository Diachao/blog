<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-24 17:06:35
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:18
 * @FilePath: \Vue第三十四天 Vue高级  Vue  vue-blog vant导航 文章列表\司文超--vue---第三十三天\vue-blog\src\components\mobile\mhome\MHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <component :is='type'
             :title="title"
             :button="button"
             :buttonHander="buttonHander"> </component>
</template>

<script>
import SearchTab from '@/components/mobile/base/SearchTab'
import NavTab from '@/components/mobile/base/NavTab'
export default {
  name: 'VantMHeader',
  data () {
    return {
      type: 'SearchTab',
      title: '',
      button: '',
      buttonHander: ''
    };
  },
  components: {
    SearchTab, NavTab
  },

  mounted () {

  },
  watch: {
    $route (to) {
      this.button = ''
      this.buttonHander = ""
      Object.assign(this, to.meta)
    }
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>