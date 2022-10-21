<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-25 15:48:33
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:25
 * @FilePath: \Vue第三十五天 Vue高级  Vue  vue-blog 文章内容 评论action\司文超--vue---第三十四天\vue-blog\src\components\mobile\article\ArticleContent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blogm-article">
    <h3 class='blogm-article--title'>{{article.title}}</h3>
    <ArticleInfo :info="info" />
    <div class="markdown-body article-con"
         v-once
         v-html="content"></div>
  </div>
</template>

<script>
import ArticleInfo from '@/components/mobile/article/ArticleInfo.vue'
export default {
  name: 'ArticleContent',
  components: { ArticleInfo },
  data () {
    return {
    }
  },
  props: {
    article: {
      type: Object,
      default: function () {
        return {
          body: '',
          title: '默认标题',
          date: '默认日期',
          hit_num: 0,
          comment_num: 0,
          like_num: 0
        }
      }
    }
  },
  computed: {
    info () {
      let { hit_num, comment_num, like_num, date, id, likes_users, author } = this.article
      let { nikname, avatar } = author
      return {
        hit_num, comment_num, like_num, date, likes_users, id, nikname, avatar
      }
    },
    content () {
      return this.article.body
    }
  },
  methods: {},
  watch: {},
  created () { },
  mounted () { },
  destroyed () { }
}

</script>
<style lang='stylus'>
.blogm-article {
  padding: 0.5em;

  & pre {
    white-space: pre-wrap;
  }

  & xmp {
    white-space: normal;
  }

  & .article-con h2 {
    font-size: 6.3em;
  }
}

.blogm-article--title {
  font-size: 1.5em;
  padding: 0.5em 0;
  word-wrap: break-word;
  word-break: normal;
}
</style>
