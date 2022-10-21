<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-20 21:04:34
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-20 22:06:46
 * @FilePath: \Vue第三十天 Vue高级  Vue  vue-blog live2d webSocket\司文超--vue---第二十九天\vue-blog\src\components\Live2d.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="live-wrap">
    <div class='live-menu'>
      <span class="live-menu--item" @click="changeModel"><i class="fa fa-refresh"></i></span>
      <span class="live-menu--item" @click="changeClothes"><i class="fa fa-shopping-bag"></i></span>
    </div>
     <canvas id="live2d" width="200" height="300"></canvas>
  </div>
</template>

<script>
import '@/static/js/live2d'
import store from 'store'
import axios from 'axios'
const GET_URL = 'https://live2d.fghrsh.net/api/get/'//获取资源api
const MODEL_URL = 'http://api.fghrsh.net/live2d/switch/'//按顺序获取人物
const TEXTURES_URL = 'https://api.fghrsh.net/live2d/rand_textures/'//随机获取人物衣服
const MODEL_LIST ="model-clothes"
export default {
  name: 'VueBlogLive2dWebSocketLive2d',
  data() {
    return {
      modelId:1,
      clothesId:1
    };
  },
  mounted() {
    let modelList=store.get(MODEL_LIST)
    this.modelId=modelList?.modelId || 1
    this.clothesId=modelList?.clothesId||1
    this.loadModel()
  },
  methods: {
   async changeModel(){
    try{
    let result =await axios.get(`${MODEL_URL}?id=${this.modelId}`)
    console.log(result)
    this.modelId=result.data?.model.id
    this.loadModel()
    }catch(err){
      this.resetModel()
    }
   },
   async changeClothes(){
    try{
    let result =await axios.get(`${TEXTURES_URL}?id=${this.modelId}`)
     this.clothesId=result.data?.textures.id
    this.loadModel()
    }catch(err){
      this.resetModel()
    }
   },
   loadModel(){
    console.log(`${GET_URL}?id=${this.modelId}-${this.clothesId}`)
     loadlive2d('live2d', `${GET_URL}?id=${this.modelId}-${this.clothesId}`,console.log('live2d','模型  加载完成'))
     store.set(MODEL_LIST,{ modelId: this.modelId, clothesId: this.clothesId })
   },
   resetModel(){
    this.modelId=1
    this.clothesId=1
    this.loadModel()
   }
  },
};
</script>

<style lang="stylus">
.live-wrap
  position fixed 
  left 0
  bottom 12px
  width 200px
.live-menu
  position fixed 
  left 20px
  bottom 200px
  display flex
  flex-direction: column
.live-wrap .live-menu--item
  display none
.live-wrap:hover .live-menu--item
  display block
  width 14px
  line-height 14px
  padding-bottom 6px
  color pink
  cursor pointer
</style>