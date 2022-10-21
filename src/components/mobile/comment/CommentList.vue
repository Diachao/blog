<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-26 19:44:18
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-26 20:06:27
 * @FilePath: \Vue第三十六天 Vue高级  Vue  vue-blog 评论内容 dialog登录\司文超--vue---第三十五天\vue-blog\src\components\mobile\comment\CommentList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-cell-group>
    <template #title>
      <h2 class="blogm-comment--title">评论区</h2>
    </template>
     <div class="blogm-comment--wrap" v-if="hasComments">
     <div class="blogm-comment--item" v-for="comment in comments" :key="comment._id">
        <van-cell :title="comment.uid.nikname" >
        <template #right-icon>
          <span class="blogm-comment--date">{{comment.date}}</span>
        </template>
        </van-cell>
        <van-cell  :value="comment.content" />
      </div>
    </div>
    <van-empty v-else description="暂无评论" />
</van-cell-group>
</template>

<script>
export default {
  name: 'CommentList',
  components: {

  },
  data () {
    return {
    }
  },
  props: {
    comments: {
      type: Array
    }
  },
  computed: {
    hasComments(){
      return this.comments?.length
    }
  },
  methods: {},
  watch: {},
  created () {},
  mounted () {},
  destroyed () {}
}

</script>
<style lang='stylus'>
.blogm-comment--title
  padding:  1.2em
  font-weight 700
  font-size 2em
  text-align center
  background-color #777
.blogm-comment--item
  border-bottom 3px solid #ddd
.blogm-comment--date
  color #ccc
  font-size .8em
</style>
