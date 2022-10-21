<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-26 16:09:23
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 14:56:59
 * @FilePath: \Vue第三十六天 Vue高级  Vue  vue-blog 评论内容 dialog登录\司文超--vue---第三十五天\vue-blog\src\components\mobile\modal\MForm.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
 <van-form class="blogm-form" ref="form">
  <van-field
    class="blogm-field"
    v-for="item in formData"
    :key="item.query"
    v-model="form[item.query]"
    :name="item.label"
    :label="item.label"
    :readonly ="item.readonly"
    :type="item.type"
    :placeholder="item.placeholder"
    :rules="validates[item['query']] | formatRulesTrigger"
  />

</van-form>
</template>

<script>
import validate from '@/config/validate.config.js'
import FORM_DATA from '@/config/form.config.js'
export default {
  name: 'MForm',
  components: {},
  data () {
    return {
       form: {

      }
    }
  },
  props: {
    type:{
      type:String
    }
  },
  computed: {
   validates () {
      return validate
    },
    formData () {
      return FORM_DATA[this.type].filter(item=>{
        return  item['query'] !=='avatar'
      })
    },
  },
  filters:{
    formatRulesTrigger(rules){
     return rules?.map(item=>{
      item.trigger='onBlur'
      return item
     })
    }
  },
  methods: {
    resetForm(){
      this.form={}
      this.$refs.form.resetValidation()
    }
  },
  watch: {},
  created () {
      if (this.type == 'info') {
      this.form = Object.fromEntries(Object.entries(this.$store.getters.userInfo).filter(([key]) => {
        return FORM_DATA['info'].find(item => {
          return key == item['query']
        })
      }))
    }
  },
  mounted () {},
  watch:{
   type(newVal){
      if (newVal == 'info') {
      this.form = Object.fromEntries(Object.entries(this.$store.getters.userInfo).filter(([key]) => {
        return FORM_DATA['info'].find(item => {
          return key == item['query']
        })
      }))
    }

   }
  },
  destroyed () {}
}

</script>
<style lang='stylus'>
.blogm-form .blogm-field
  padding 1.3em 1em
input:-internal-autofill-selected
  background-color #fff
</style>
