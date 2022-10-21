<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 22:41:36
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:38
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\components\comment\CommentList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-comment--list"
       v-if='commentLength'>
    <h3 class="blog-comment--name">评论列表</h3>
    <ul>
      <CommentItem v-for='comment in comments'
                   :key="comment._id"
                   :comment="comment" />
    </ul>
  </div>
</template>

<script>
import CommentItem from '@/components/comment/CommentItem.vue'
export default {
  name: 'VueBlogCommentList',
  props: {
    comments: {
      type: Array
    }
  },
  components: {
    CommentItem
  },
  data () {
    return {

    };
  },
  computed: {
    commentLength () {
      return this.comments?.length
    }
  },
  mounted () {

  },

  methods: {

  },
};
</script>

<style lang="stylus" >
.blog-comment--list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
}

.blog-comment--name {
  width: 100%;
  line-height: 24px;
  margin: 12px 4px;
  background-color: skyblue;
  color: green;
  text-align: center;
  border-radius: 12px;
}
</style>