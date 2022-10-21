<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-14 11:12:01
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:34
 * @FilePath: \Vue第二十六天 Vue高级  Vue  vue-blog 文章类别 分类查询\司文超--vue---第二十五天\vue-blog\src\components\editor\EditorColumn.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-radio-group v-model="column">
    <el-radio-button v-for="item in columns"
                     :label='item.id'
                     :key="item.id">{{item.name}}</el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  name: 'VueBlogEditorColumn',

  data () {
    return {
      columns: [],
      column: ''
    };
  },
  props: {
    columnId: { type: String }
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
        this.columns = result.list.map(item => {
          return {
            id: item._id,
            name: item.name
          }
        })
        if (this.columnId) {
          this.column = this.columnId
          return
        }
        this.column = this.columns?.[0]?.id
      } catch (err) {
        console.log(err)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>