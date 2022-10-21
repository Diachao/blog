<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-24 16:50:39
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 15:23:29
 * @FilePath: \Vue第三十四天 Vue高级  Vue  vue-blog vant导航 文章列表\司文超--vue---第三十三天\vue-blog\src\mviews\MUser.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blogm-user">
    <van-uploader v-if="avatar" :after-read="afterRead" v-model="fileList" :preview-image="false">
     <van-image
       round
        width="6rem"
        height="6rem"
        fit="cover"
        :src="avatar"
    />
    </van-uploader>
   <van-image v-else
    width="6rem"
    height="6rem"
    round
    fit="cover"
    src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
  <div class="blogm-info">
    <h2 class="blogm-info--title">{{title}}</h2>
    <MForm :type="type" ref="userInfo"/>
  </div>
  <van-button type="info" block @click="onSubmit">{{btnName}}</van-button>
  <van-button v-if="type==='info'" type="warning" plain  block @click="logout">退出登录</van-button>
  <p v-if="type !=='info'" v-html="message" class="blogm-info--msg" @click="changeType"></p>
  </div>
</template>

<script>
import { Notify } from 'vant';
import MForm from 'm/modal/MForm'
import MODAL_DATA from '@/config/modal.config'
const BTN={
  'login':'登录',
  'register':'注册',
  'info':'修改',
}
const LOGIN_MAP={
  'login':'login',
  'register':'register',
  'info':'putUserInfo',
}
const MESSAGE={
  'login':'还没有账号？<span>请先注册</span>',
  'register':'已有账号？<span>请先登录</span></span>'
}
export default {
  name: 'VantMUser',
  props:{
    state:{
      type:String,
      default:'login'
    }
  },
  components:{
    MForm
  },
  data () {
    return {
     fileList:[],
     fileUrl:"",
     typeChange:""
    };
  },
  computed:{
    hasLogin(){
      return this.$store.getters?.userInfo._id
    },
    type(){
      return this.hasLogin?'info': (this.typeChange || this.state)
    },
    btnName(){
      return BTN[this.type]
    },
    avatar(){
       return this.fileUrl || this.$store.getters?.userInfo.avatar
    },
    title(){
      return MODAL_DATA[this.type].title
    },
    message(){
      return MESSAGE[this.type]
    }
  },
  mounted () {
  },

  methods: {
 async  afterRead(res){
    let file=res.file
    let data=new FormData()
    data.append("file",file)
    try{
     let result= await this.$api({ type: 'uploadUserAvatar', data})
     this.fileUrl=result.fileURL
    }catch(err){
      console.log(err)
    }
   },
   onSubmit(){
    let formData=this.$refs.userInfo.form
    let form =this.$refs.userInfo.$refs.form
      form.validate().then(async ()=>{
       try{
        if(this.fileUrl){
          formData.avatar=this.fileUrl
        }
          let message=`${BTN[this.type]}成功`
         await this.$api({ type: LOGIN_MAP[this.type], data:formData})
           Notify({
           type: 'success', 
           message
         })
         this.$store.dispatch("getUserInfo")
       }catch(err){
        console.log(err)
       }
      }).catch(err=>{
        console.log(err)
      })
      return false
   },
   logout(){
     this.$store.dispatch('logout');
     this.$router.push('/m')
   },
   changeType(){
    this.typeChange=this.typeChange==='login'?'register':"login"
   }
  },
};

</script>

<style lang="stylus">
.blogm-user
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
  height: 100%
  padding .8em 
.blogm-info
  padding .8em 0
  & .blogm-info--title
    width 100%
    padding .5em 0
    text-align: center
    font-weight 700
    font-size 1.3em
.blogm-info--msg span
  color blue
</style>