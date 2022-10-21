<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 21:47:23
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:27
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\components\article\ArticleInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-card>
    <template #thumb>
      <van-image width="80"
                 height="80"
                 :src="info.avatar" />
    </template>
    <template #title>
      <h3 class="blogm-info--nikname van-ellipsis">{{info.nikname}}</h3>
    </template>
    <template #desc>
      <p class="article-mitem--content ">{{info.date}}</p>
    </template>
    <template #num>
      <p class="van-ellipsis blogm-info">
        <van-icon name="fire-o" /><span class="">浏览({{info.hit_num}})</span>
        <van-icon name="like-o" /><span class="">点赞 ({{info.like_num}})</span>
        <van-icon name="comment-o" /><span class="">评论({{info.comment_num}})</span>
      </p>
    </template>

  </van-card>
</template>

<script>
export default {
  name: 'ArticleInfo',
  props: {
    info: Object
  },

  data () {
    return {
      num: 0
    };
  },
  created () {

  },
  computed: {

  },
  methods: {

    like () {
    }
  }

};
</script>

<style lang='stylus'>
.blogm-info--nikname {
  padding: 0 0.5em;
  font-size: 1.3em;
}

.blogm-info {
  & span {
    padding-right: 1em;
  }
}
</style>