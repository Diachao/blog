<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-24 21:22:10
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 15:28:31
 * @FilePath: \Vue第三十六天 Vue高级  Vue  vue-blog 评论内容 dialog登录\司文超--vue---第三十五天\vue-blog\src\mviews\MArticle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <ArticleContent :article='article'
                    v-if="article.id" />
    <CommentList :comments="comments"/>
    <van-action-sheet v-model="show"
                      title="标题"
                      :round="false">
      <van-field v-model="message"
                 rows="4"
                 autosize
                 type="textarea"
                 placeholder="请输入评论内容" />
      <van-button type="info"
                  @click="submitComment"
                  block>提交</van-button>
    </van-action-sheet>
  </div>
</template>

<script>
import { Notify } from 'vant';
import ArticleContent from '@/components/mobile/article/ArticleContent.vue'
import CommentList from '@/components/mobile/comment/CommentList.vue'
export default {
  name: 'VantArticle',
  components: {
    ArticleContent,CommentList
  },
  data () {
    return {
      id: '',
      article: {},
      show: false,
      message: ''
    };
  },
  created () {
    this.id = this.$route.params.id
    this.getArticle()
    this.$EventBus.$on('open-comment', () => {
      if(!this.$store.state.token){
        Notify({
          type: 'warning', 
          message: '请先登录'
        })
        this.$EventBus.$emit('open-dialog','login')
        return false
      }
      this.show = true
    })
  },
  mounted () {
   this.$EventBus.$on('have-login',()=>{
    this.show=true
   })
  },
  computed:{
    comments () {
      return this.article?.comment
    },
  },
  methods: {
    async getArticle () {
      try {
        this.article = await this.$api({ type: 'articleById', data: { id: this.id } })
      } catch (err) {
        Notify({
          type: 'danger', 
          message: err.message
        })
      }
    },
    async submitComment () {
      if(this.message.trim().length===0){
       Notify({ type: 'warning', message: '输入内容不能为空' })
       return false
      }
        try {
        this.$api({ type: "postComment", data: { content: this.message, aid: this.id } })
        Notify({
          type: 'success', 
          message: '评论成功' 
        })
        this.getArticle()
      } catch (err) {
        Notify({
          type: 'danger', 
          message: '评论失败' 
        })
      }
      this.resetComment()
    },
    resetComment(){
      this.show=false
      this.message=''
    }
  },
};
</script>

<style lang="scss" scoped>
</style>