<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 21:09:50
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:09:08
 * @FilePath: \vue-blog\src\views\Column.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-column--word">
    <wordcloud :data="columns"
               nameKey="name"
               valueKey="value"
               idKey='id'
               :fontSize="fontSize"
               :color="colorColumns"
               :showTooltip="false"
               :wordClick="wordClickHandler">
    </wordcloud>
  </div>
</template>

<script>
import MIXIN from '@/core/mixin'
import wordcloud from 'vue-wordcloud'
export default {
  name: 'VueBlogColumn',
  mixins: [MIXIN],
  components: {
    wordcloud
  },
  data () {
    return {
      colorColumns: ['#1f77b4', '#67C23A', '#909399', '#E6A23C', "#F56C6C"],
      columns: [],
      columnsList: [],
      result: [],
      fontSize: [60, 100]
    };
  },
  created () {
    this.getColumns()
  },
  mounted () {
    this.$EventBus.$on('addColumns', () => {
      this.refreshModal('postColumn')
    })
    this.$EventBus.$on("updatedPage", () => {
      this.getColumns()
    })
  },

  methods: {
    wordClickHandler (name) {
      let columnId = this.columnsList.find(item => {
        return item.name == name
      })?.id
      this.$router.push({ name: 'index', query: { columnId } })
    },
    async getColumns () {
      try {
        this.result = await this.$api({ type: "columns" })
        this.columns = this.result.list.map(item => {
          return {
            name: item.name,
            value: item.aids.length || 0,
          }
        })
        this.columnsList = this.result.list.map(item => {
          return {
            name: item.name,
            id: item._id,
          }
        })
      } catch (err) {
        this.$notify.error({
          title: '获取失败',
          message: err.message
        })
      }
    }

  },
};
</script>

<style lang="stylus" >
.blog-column--word {
  width: 960px;

  & text {
    cursor: pointer;
  }
}
</style>