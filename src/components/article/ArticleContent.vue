<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 21:47:13
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:53
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\components\article\ArticleContent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-article">
    <div class='blog-container--article'>
      <div class='blog-container--pic'>
        <img :src='article.pic'
             alt=''>
      </div>
      <h3 class='blog-container--title'>{{article.title}}</h3>
      <ArticleInfo :info="info" />
      <div class="blog-item--essay"
           v-once
           v-html="content"></div>
    </div>
  </div>
</template>

<script>
import ArticleInfo from '@/components/article/ArticleInfo';
export default {
  name: 'VueBlogArticleContent',
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
  data () {
    return {

    };
  },
  components: {
    ArticleInfo
  },
  created () {

  },
  computed: {
    info () {
      let { hit_num, comment_num, like_num, date, id, likes_users } = this.article
      return {
        hit_num, comment_num, like_num, date, likes_users, id, nikname: this.nikname
      }
    },
    nikname () {
      return this.article?.author?.nikname || '默认昵称'
    },
    content () {
      return this.article.body
    }
  },
  mounted () {
  },

  methods: {

  },
};
</script>

<style lang="stylus">
.blog-artical {
  // height: 70vh
  padding: 1.5rem;
  overflow-y: scroll;
  background-color: #fff;
}

/* table 样式 */
table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}

table td, table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}

table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

/* blockquote 样式 */
blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}

/* code 样式 */
code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}

pre code {
  display: block;
}

/* ul ol 样式 */
ul, ol {
  margin: 10px 0 10px 20px;
}

.blog-container--article {
  position: relative;
  width: calc(100% - 100px);
  min-width: 400px;
  padding-right: 16px;
  padding-left: 16px;
}

.blog-article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-width: 740px;
  margin: 0 auto;
  padding-bottom: 20px;
  border: 1px solid #ccc;

  & h4 {
    padding: 8px;
  }

  & .blog-container--pic {
    display: flex;
    justify-content: center;
    margin-top: 12px;

    & img {
      width: 50%;
      height: auto;
    }
  }

  & .blog-container--title {
    position: relative;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 18px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }

  & .blog-item--author {
    font-size: 18px;
    color: skyblue;
  }

  & .blog-item--essay {
    font-size: 16px;

    & p {
      color: #999;
      letter-spacing: 1px;
      line-height: 24px;
    }
  }
}

.blog-article {
  padding: 8px;

  & pre {
    white-space: pre-wrap;
    overflow: hidden;
  }

  & xmp {
    white-space: normal;
  }
}
</style>