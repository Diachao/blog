<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-12 21:47:23
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:54
 * @FilePath: \Vue第二十四天 Vue高级  Vue  vue-blog 滚动加载 文章内容 评论\司文超--vue---第二十三天\vue-blog\src\components\article\ArticleInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-article--info">
    <span class="blog-info--item">
      作者: {{info.nikname}}
    </span>
    <span class="blog-info--item">
      <i class="el-icon-time"></i> {{info.date}}
    </span>
    <div class="hidden-xs-only blog-info--num">
      <span class="blog-info--item"
            @click="like">
        <i class="el-icon-star-on like"
           :class="{active:isLike}"></i> {{like_num}}
      </span>
      <span class="blog-info--item">
        <i class="el-icon-thumb">{{info.hit_num}}</i>
      </span>
      <span class="blog-info--item">
        <i class="el-icon-s-grid"> {{info.comment_num}}</i>
      </span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('likes')
export default {
  name: 'VueBlogArticleInfo',
  props: {
    info: Object
  },

  data () {
    return {
      num: 0
    };
  },
  created () {
    this.$EventBus.$on("likeArticle", () => {
      //如果点赞数值加一
      this.num += this.isLike ? 1 : -1
    })
  },
  computed: {
    ...mapGetters(["isLike"]),
    like_num () {
      return Math.max(this.info.like_num + this.num, 0)
    }
  },
  methods: {
    ...mapActions(["pullLike", "pushLike", "sendLike"]),
    like () {
      //如果已经点赞了则取消点赞
      this.num += this.isLike ? -1 : 1
      this?.[this.isLike ? "pullLike" : "pushLike"]()
      this.sendLike()
    }
  }

};
</script>

<style lang='stylus'>
.blog-article--info {
  display: flex;
  justify-content: space-around;
  margin: 12px 0;
  font-size: 14px;
}

.blog-info--num {
  display: flex;
  justify-content: space-around;
  min-width: 120px;
}

.like {
  cursor: pointer;
}

.like.active {
  color: red;
}
</style>