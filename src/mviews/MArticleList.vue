<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-24 16:52:22
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-27 20:06:34
 * @FilePath: \Vue第三十四天 Vue高级  Vue  vue-blog vant导航 文章列表\司文超--vue---第三十三天\vue-blog\src\mviews\MArticleList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-pull-refresh v-model="refreshing"
                    @refresh="onRefresh">
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              offset='100'
              :error.sync="error"
              error-text="请求失败，点击重新加载">
      <router-link v-for="item in articleList"
                   :key="item.id"
                   :to="{name:'marticle',params:{id:item.id}}">
        <ArticleItem :article='item' />
      </router-link>

    </van-list>
  </van-pull-refresh>
</template>

<script>
import ArticleItem from '@/components/mobile/article/ArticleItem'
import QS from 'qs'
export default {
  name: 'VantMArticleList',
  data () {
    return {
      articleList: [],
      loading: false,
      finished: false,
      refreshing: false,
      error: false,
      page: 1,
      size: 6,
      q: "",
      columnArticleList: {}
    };
  },
  props: {
    columnId: {
      type: String
    }
  },
  watch: {
    columnId (newVal) {
      if (this.columnArticleList[newVal]) {
        this.articleList = this.columnArticleList[newVal]
        return false
      }
      this.refreshing = true
      this.onRefresh()
    }
  },
  components: {
    ArticleItem
  },
  mounted () {
    this.$EventBus.$on("search-article", this.searchArticle)
  },

  methods: {
    onLoad () {
      this.getArticles()
    },
    setQuery () {
      let column = this.columnId || undefined
      let q = this.q || undefined
      let query = JSON.parse(JSON.stringify({ column, q }))
      return query
    },
    searchArticle (q) {
      this.q = q
      this.refreshing = true
      this.onRefresh()
    },
    onRefresh () {
      this.page = 1
      this.loading = true;
      this.finished = false;
      this.onLoad();
    },
    getArticles () {
      let data = { size: this.size, page: this.page }
      let query = this.setQuery();
      if (Object.entries(query).length > 0) {
        data.query = QS.stringify(query)
      }
      this.$api({ type: "articles", data }).then(result => {
        if (this.refreshing) {
          this.articleList = [];
          this.refreshing = false;
        }
        if (this.articleList.length >= result.total) {
          this.finished = true;
          return false
        }
        this.articleList.push(...result.list)
        this.setColumnArticles()
        this.loading = false;
        this.page++;
      }).catch(err => {
        this.error = true;
      })
    },
    setColumnArticles () {
      if (this.columnId) {
        this.columnArticleList[this.columnId] = JSON.parse(JSON.stringify(this.articleList))
      }
    }
  },
};
</script>

<style lang="stylus"></style>