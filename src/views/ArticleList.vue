<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 21:10:57
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 20:38:02
 * @FilePath: \vue-blog\src\views\Article.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <transition enter-active-class="animate__animated animate__fadeIn"
              appear>
    <div v-if='articles.length'
         class="article-wrap">
      <el-card v-for='item in articles'
               :key='item.id'
               class="blog-card--article">
        <!-- 是router-link 不是link-router -->
        <router-link :to="{name:'article',params:{id:item.id}}">
          <CardArticle :article='item' />
        </router-link>
      </el-card>
    </div>
    <article v-else
             class="blog-article--NOT blog-article-wrap">
      <h3 class="blog-article--title">抱歉，没有对应的文章</h3>
      <el-button type="success"
                 class="blog-article--btn"
                 @click="addArticleWithColumn">添加一篇</el-button>
    </article>
  </transition>
</template>

<script>
import QS from 'qs'
export default {
  name: 'VueBlogArticleList',
  components: {
    CardArticle: () => import('@/components/article/ArticleItem.vue')
  },
  props: {
    loading: { type: Boolean },
    columnId: { type: String }
  },
  inject: ['closeLoad'],
  data () {
    return {
      articles: [],
      page: 1,
      size: 3,
      q: ''
    };
  },
  // activated(){
  //   console.log(this.scrollTop,'1111111')
  // if(this.scrollTop){
  //   this.$refs['scroll'].scrollTo({
  //     y:this.scrollTop
  //   },0)
  // }
  // },
  created () {
    this.clearArticle()
    this.getArticles();
  },
  watch: {
    loading (load) {
      if (load) {
        this.getArticles()
      }
    },
    $route (to) {
      if (to.name === 'index') {
        this.clearArticle()
      }
    }
  },
  mounted () {
    this.$EventBus.$on("searchArticle", (q) => {
      this.q = q
      this.clearArticle()
      this.getArticles()
    })
  },

  methods: {
    setQuery () {
      let column = this.columnId
      let q = this.q || undefined
      let query = JSON.parse(JSON.stringify({ column, q }))
      return query
    },
    getArticles () {
      let data = { size: this.size, page: this.page }
      let query = this.setQuery();
      if (Object.entries(query).length > 0) {
        data.query = QS.stringify(query)
      }
      this.$api({ type: "articles", data }).then(result => {
        if (this.articles.length >= result.total) {
          console.log('到达底部了')
          return false
        }
        this.articles.push(...result.list)
        this.page++;
        this.closeLoad()

      }).catch(err => {
        this.$notify.error({
          title: '获取失败',
          message: err.message
        })
      })
    },
    clearArticle () {
      this.page = 1
      this.articles = []
    },
    addArticleWithColumn () {
      this.$router.push({ name: "editor", query: { columnId: this.columnId } })
    }
  },
};
</script>

<style lang="stylus">
.blog-article-wrap {
  overflow: hidden;
  min-width: 920px;
  height: 100%;
}

.blog-card--article {
  width: 740px;
  margin: 16px auto;
}

.blog-article--NOT {
  width: 100%;
  height: 85vh;
  text-align: center;

  .blog-article--title {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .blog-article--btn {
    font-size: 18px;
    color: #fff;

    &:hover {
      color: #6766;
    }
  }
}
</style>