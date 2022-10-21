<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 22:42:00
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:40
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\components\comment\CommentTextArea.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class=" blog-comment--editor">
    <h3 class="blog-comment--name">评论</h3>
    <textarea class="blog-comment--input"
              v-model="content"
              ref='textarea'></textarea>
    <div class='blog-btn'>
      <a class="blog-comment--clear"
         @click='clearComment'>清空</a>
      <a class="blog-comment--submit"
         @click='submitComment'>提交</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueBlogCommentTextArea',
  props: {
    aid: {
      type: String
    }
  },
  inject: ['getArticle'],
  data () {
    return {
      content: ''
    };
  },

  mounted () {
    this.$EventBus.$on('writeComments', () => {
      this.focusTextArea()
    })
  },

  methods: {
    clearComment () {
      this.content = ''
    },
    async submitComment () {
      if (this.content.trim().length === 0) {
        this.$notify.info({
          title: '请输入评论内容',
        })
        this.focusTextArea()
        return
      }
      try {
        this.$api({ type: "postComment", data: { content: this.content, aid: this.aid } })
        this.$notify.success({
          title: '评论成功',
        })
        this.clearComment()
        this.getArticle()
      } catch (err) {
        this.$notify.error({
          title: '评论失败',
          message: err.message
        })
      }
    },
    focusTextArea () {
      this.$refs?.["textarea"]?.focus()
    }
  },
};
</script>

<style lang="stylus">
.blog-comment--editor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 76%;
  margin: 0 auto;

  & .blog-comment--name {
    width: 100%;
    line-height: 24px;
    margin: 12px 4px;
    background-color: skyblue;
    color: green;
    text-align: center;
    border-radius: 12px;
  }

  & .blog-comment--input {
    width: 100%;
    height: 180px;
    resize: none;
  }

  & .blog-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    & .blog-comment--submit, .blog-comment--clear {
      width: 72px;
      margin-top: 8px;
      margin-right: 12px;
      line-height: 36px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      background-color: #8DC4FD;
      border: 1px solid #222;
      border-radius: 30px;
      cursor: pointer;
    }
  }
}
</style>