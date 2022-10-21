<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 22:56:20
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:37
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\components\comment\CommentItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <li class="blog-comment--item">
    <div class="blog-comment--user">
      <div class="blog-comment--avatar">
        <img :src="avatar"
             alt="!">
      </div>
      <span class="blog-comment--username">{{nikname}}</span>
    </div>
    <p class="blog-comment-content">{{comment.content}}</p>
    <p class="blog-comment-date">{{comment.date}}</p>
  </li>
</template>

<script>
export default {
  name: 'VueBlogCommentItem',
  props: {
    comment: {
      type: Object
    }
  },
  data () {
    return {

    };
  },

  mounted () {

  },
  computed: {
    avatar () {
      return this.comment.uid.avatar
    },
    nikname () {
      return this.comment.uid.nikname
    }
  },

  methods: {

  },
};
</script>

<style lang="stylus" >
.blog-comment--list ul {
  width: 100%;
  background-color: #FeFeFF;

  & .blog-comment--item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 8px;
    border-bottom: 1px solid #ccd;

    & .blog-comment--user {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      padding-left: 12px;
      background-color: #bed75d;
      border-bottom: 1px solid #ccd;
      border-radius: 20px;

      & .blog-comment--avatar {
        width: 48px;
        height: 48px;
        overflow: hidden;
        border-radius: 50%;

        & img {
          height: 100%;
          width: auto;
        }
      }

      & .blog-comment--username {
        margin-left: 20px;
        line-height: 64px;
        color: #111;
      }
    }
  }
}

.blog-comment-content {
  margin: 12px 4px;
  font-size: 16px;
}

.blog-comment-date {
  font-size: 14px;
  color: #bbb;
  align-self: flex-end;
}
</style>