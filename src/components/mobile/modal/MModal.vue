<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-26 14:05:27
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-28 14:45:30
 * @FilePath: \Vue第三十六天 Vue高级  Vue  vue-blog 评论内容 dialog登录\司文超--vue---第三十五天\vue-blog\src\components\mobile\modal\Mmodal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-dialog v-model="showDialog"  show-cancel-button @cancel='onCancel'
  :before-close="beforeClose">
  <template #title>
    <div  class="blogm-title--wrap">
    <h2 class="blogm-dialog--title">{{title}}</h2>
    <van-tag plain type="primary" @click="goToUser" class="blogm-dialog--register">注册</van-tag>
    </div>
  </template>
    <MForm :type='type' ref="formwarp"/>
  </van-dialog>
</template>

<script>
import MForm from 'm/modal/MForm'
import MAP_MODAL from '@/config/modal.config.js'
export default {
  name: 'MModal',
  components: {MForm},
  data () {
    return {
      showDialog:false,
      type:''
    }
  },
  props: {},
  computed: {
    formType () {
      return MAP_MODAL?.[this.type]?.formType
    },
    title () {
      return MAP_MODAL?.[this.type]?.title || '弹窗'
    },
  },
  methods: {
    onCancel(){
      this.$refs.formwarp.resetForm()
    },
    beforeClose(action,done){
     if(action=== 'confirm'){
      let form =this.$refs.formwarp.$refs.form
      form.validate().then(async ()=>{
       try{
         await this.$api({ type: this.type, data: this.$refs.formwarp.form})
         this.$EventBus.$emit('have-login')
         done()
       }catch(err){
        //重置表单
        this.$refs.formwarp.resetForm()
        done(false)
       }
      }).catch(err=>{
        //如果验证未通过则不关闭弹窗
        done(false)
      })
      return false
     }
      done()
    },
    goToUser(){
      this.showDialog=false
      this.$router.push({name:"mUser",query:{
        state:'register'
      }})
    }
  },
  watch: {},
  created () {},
  mounted () {
    this.$EventBus.$on('open-dialog',(type)=>{
      this.showDialog=true
      this.type=type
    })
  },
  destroyed () {}
}

</script>
<style lang='stylus'>
.blogm-title--wrap
  width 100%
  display flex
  justify-content: flex-end
.blogm-dialog--register
  display: flex
  justify-content: center
  width: 12%
  margin .4em
.blogm-dialog--title
  width: 74%
</style>
