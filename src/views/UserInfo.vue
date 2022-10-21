<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 21:11:35
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-29 20:49:41
 * @FilePath: \vue-blog\src\views\UserInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-userInfo">
    <div class="clearfix blog-userInfo--wrap">
      <span class="blog-userInfo--title">个人信息</span>
      <BaseForm type="info"
                ref="form" />
      <div class="blog-userInfo-control">
        <el-button type="primary"
                   plain
                   @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseForm from '@/components/base/BaseForm.vue'
export default {
  name: 'VueBlogUserInfo',
  components: {
    BaseForm
  },
  data () {
    return {

    };
  },

  mounted () {

  },

  methods: {
    submit () {
      let refForm = this.$refs['form']
      refForm.$refs['elForm'].validate(async (valid) => {
        if (valid) {
          try {
            await this.$api({ type: "putUserInfo", data: refForm.form })
            this.$store.dispatch("getUserInfo",{upload:true})
            this.$router.push({ name: "index" })
          } catch (err) {
            refForm.$refs['elForm'].initForm()
          }
        } else {
          return false;
        }
      });
    }
  },
};
</script>

<style lang="stylus" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before, .clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.blog-userInfo {
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  width: 920px;
  margin-top: 20px;
}

.blog-userInfo .blog-userInfo--wrap {
  box-sizing: border-box;
  width: 740px;
  padding: 20px;
  box-shadow: 0 0 2px 2px #ccc;
  border-radius: 12px;
}

.blog-userInfo--title {
  line-height: 36px;
}

.blog-userInfo-control {
  text-align: right;
}
</style>