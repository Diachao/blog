<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 21:02:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:09:16
 * @FilePath: \vue-blog\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import isMobile from '@/util/isMobile.js'
export default {
  name: "app",
  created () {
    if (this.$route.name !== 'index') {
      this.$router.push({ name: "index" })
    }
  },
  mounted () {
    if (isMobile()) {
      this.$router.replace("/m")
    }

  },
  methods: {
  }
}
</script>
<style>
</style>
