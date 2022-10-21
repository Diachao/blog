<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-11 22:25:17
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:56
 * @FilePath: \Vue第二十三天 Vue高级  Vue  vue-blog 侧边栏 文章列表\司文超--vue---第二十三天\vue-blog\src\components\card\cardArticle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <article class='blog-container'>
    <div class='blog-container-pic'>
      <img :src='article.pic'
           alt=''>
    </div>
    <div class='blog-container-title'>
      <h3>{{article.title}}</h3>
      <p class="blog-item--date">
        <i class="glyphicon glyphicon-time"></i> {{article.date}}
      </p>
      <p class="blog-item--author">{{article.author.nikname}}</p>
      <p class="blog-item--essay">{{content}}</p>
      <p class="blog-item--tags"><span class="blog-tags--hit">浏览
          ({{article.hit_num}})</span><span class="blog-tags--like">点赞 ({{article.like_num}})</span> <span class="blog-tags--comment">评论({{article.comment_num}})</span></p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'VueBlogArticleItem',
  props: {
    article: {
      type: Object
    }
  },
  data () {
    return {
    };
  },
  computed: {
    content () {
      let content = this.article?.body?.match(/>([^<>]+)</)?.[1] || '默认标题'
      return content
    }
  },
  mounted () {
  },

  methods: {

  },
};
</script>
<style lang="stylus">
@import '~assets/css/base.styl';

.blog-container {
  display: flex;
}

.blog-container-title {
  position: relative;
  width: calc(100% - 300px);
  min-width: 400px;
  padding-right: public-padding * 2;
  padding-left: public-padding * 2;
}

.blog-container-title {
  text-align: center;
}

.blog-container-title>h3 {
  font-size: 18px;
  color: #000;
}

.blog-item--date {
  margin-top: 8px;
  padding-right: public-padding * 4;
  text-align: right;
  color: #ccc;
}

.blog-item--author {
  padding-top: 4px;
  padding-right: public-padding * 4;
  color: #000;
  text-align: right;
}

.blog-item--essay {
  width: 100%;
  padding-top: public-padding;
  text-align: left;
  text-indent: 2em;
  font-size: 14px;
  color: #000;
}

.blog-item--tags {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-top: 4px;
  text-align: right;

  &>span {
    padding-right: 4px;
    color: #000;
  }
}

.blog-container-pic {
  width: 300px;
  min-width: 250px;
  padding: public-padding;
  margin-top: 20px;
  border: 2px solid #222;
}

.blog-container-pic>img {
  width: 100%;
  height: auto;
}
</style>