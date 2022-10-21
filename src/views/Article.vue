<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 21:10:57
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:09:05
 * @FilePath: \vue-blog\src\views\Article.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE

-->
<template>
  <div class="blog-article--con ">
    <ArticleContent :article='article'
                    v-if="article.id" />
    <div class='blog-comment'>
      <CommentTextArea :aid="article.id" />
      <CommentList :comments="comments" />
    </div>
  </div>

</template>

<script>
import ArticleContent from '@/components/article/ArticleContent.vue'
import CommentTextArea from '@/components/comment/CommentTextArea.vue'
import CommentList from '@/components/comment/CommentList.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('likes')
export default {
  name: 'VueBlogArticle',
  data () {
    return {
      id: '',
      article: {},
    };
  },
  provide () {
    return {
      getArticle: this.getArticle
    }
  },
  components: {
    ArticleContent, CommentTextArea, CommentList
  },
  created () {
    this.id = this.$route.params.id
    this.getArticle()
  },
  mounted () {

  },
  computed: {
    comments () {
      return this.article.comment
    },
  },
  methods: {
    ...mapActions(["getAid"]),
    async getArticle () {
      try {
        this.article = await this.$api({ type: 'articleById', data: { id: this.id } })
        this.getAid({ aid: this.article.id })
      } catch (err) {
        this.$notify.error({
          title: '获取失败',
          message: err.message
        })
      }
    }
  },
};
</script>

<style lang='stylus'>
.blog-article--con {
  min-width: 920px;
}

.blog-comment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 736px;
  margin: 0 auto;
  border: 1px solid #ccc;
  margin-top: 12px;
  background-color: #FeFeeF;
}
</style>