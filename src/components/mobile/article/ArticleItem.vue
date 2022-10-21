<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-24 20:57:14
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:28
 * @FilePath: \Vue第三十四天 Vue高级  Vue  vue-blog vant导航 文章列表\司文超--vue---第三十三天\vue-blog\src\components\mobile\article\ArticleItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-card :thumb="article.pic"> <template #title>
      <h3 class="article-mitem--title van-ellipsis">{{article.title}}</h3>
    </template>
    <template #desc>
      <p class="article-mitem--content van-multi-ellipsis--l2">{{content}}</p>
    </template>
    <template #num>
      <p class="blog-mitem--author van-ellipsis">{{article.author.nikname}}</p>
    </template>
    <template #price>
      <p class="blog-item--tags "><span class="blog-tags--hit">浏览({{article.hit_num}})</span><span class="blog-tags--like">点赞 ({{article.like_num}})</span> <span class="blog-tags--comment">评论({{article.comment_num}})</span></p>
    </template>
  </van-card>
</template>

<script>
export default {
  name: 'VantArticleItem',

  data () {
    return {

    };
  },
  props: {
    article: {
      type: Object
    }
  },
  mounted () {

  },
  computed: {
    content () {
      let content = this.article?.body?.match(/>([^<>]+)</)?.[1] || '默认标题'
      return content
    }
  },
  methods: {

  },
};
</script>

<style lang="stylus">
.article-mitem--title {
  font-size: 18px;
  padding-left: 0.5rem;
}

.article-mitem--content {
  padding: 0.5rem;
  color: #ccc;
}

.blog-mitem--author {
  color: #ccc;
}
</style>