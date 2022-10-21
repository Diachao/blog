<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-24 16:50:03
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-27 20:06:29
 * @FilePath: \Vue第三十四天 Vue高级  Vue  vue-blog vant导航 文章列表\司文超--vue---第三十三天\vue-blog\src\mviews\MColumn.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <van-sticky :offset-top="45">
      <van-tabs v-model="columnId">
        <van-tab v-for="column in columnsList"
                 :key="column._id"
                 :title="column.name"
                 :name="column._id"></van-tab>
      </van-tabs>
    </van-sticky>
    <MArticleList v-if="columnId"
                  :columnId="columnId" />
  </div>
</template>

<script>
import { Notify } from 'vant'
import MArticleList from '@/mviews/MArticleList.vue'
export default {
  name: 'VueBlogVantMColumn',
  components: {
    MArticleList
  },
  data () {
    return {
      columnsList: [],
      columnId: ""
    };
  },
  created () {
    this.getColumns()
  },
  mounted () {

  },

  methods: {
    async getColumns () {
      try {
        let result = await this.$api({ type: "columns" })
        this.columnsList = result.list
        this.columnId = this.columnsList[0]._id
      } catch (err) {
        Notify({ type: 'danger', message: err.message })
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>