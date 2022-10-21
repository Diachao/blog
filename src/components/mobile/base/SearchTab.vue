<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-25 09:35:27
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-27 20:09:33
 * @FilePath: \Vue第三十五天 Vue高级  Vue  vue-blog 文章内容 评论action\司文超--vue---第三十四天\vue-blog\src\components\mobile\base\SearchTab.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-search v-model="value"
              show-action
              :error="error"
              @focus="onFocus"
              @search="onSearch"
              placeholder="请输入搜索关键词">
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>
</template>

<script>
export default {
  name: 'SearchTab',

  data () {
    return {
      value: "",
      error: false

    };
  },

  mounted () {

  },

  methods: {
    onSearch () {
      if (this.value.trim().length === 0) {
        this.error = true
        return false
      }
      this.$EventBus.$emit('search-article', this.value)
      this.value = ""
    },
    onFocus () {
      this.error = false
    }
  },
};
</script>

<style lang="scss" scoped>
</style>