<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 22:06:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-15 21:02:58
 * @FilePath: \vue-blog\src\components\Search.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-input class="search-input"
            placeholder="请输入内容"
            v-model="input"
            @keydown.native.enter="searchArticle"
            clearable>
   <i slot="suffix" class="el-input__icon el-icon-search" @click="searchArticle"></i>
  </el-input>
</template>

<script>
export default {
  name: 'VueBlogSearch',

  data () {
    return {
      input: ''
    };
  },

  mounted () {

  },

  methods: {
   searchArticle(){
      this.$EventBus.$emit('searchArticle',this.input)
      this.input=''
   }
  },
};
</script>

<style lang='stylus'></style>