<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-27 22:10:21
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-10-14 19:48:20
 * @FilePath: \Vue第二十一天 Vue高级  Vue  vue-blog\司文超--vue---第二十天\vue-blog\src\components\BaseForm.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- model属性可以自动添加 form的属性 -->
    <el-form class="demo-dynamic"
             :model="form"
             ref="elForm">
      <el-form-item v-for="item in formData"
                    :key="item.query"
                    :label="item.label"
                    :prop="item.query"
                    :rules="validates[item['query']]"
                    label-width="100px">
        <el-upload v-if="item.type ==='avatar'"
                   ref="upload"
                   class="avatar-uploader"
                   :action="uploadAvatarUrl"
                   :headers="{
              'Authorization':`Bearer ${$store.state.token}`
            }"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess"
                   :on-error="handleAvatarError"
                   :before-upload="beforeAvatarUpload">
          <el-image v-if="imageUrl"
                    :src="imageUrl"
                    class="avatar"
                    style="width: 100px; height: 100px"
                    fit="fit"></el-image>
          <i v-else
             class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-input v-if="typeList.includes(item.type)"
                  v-model="form[item['query']]"
                  :type="item.type"
                  :name="item['query']"
                  :disabled="item.readonly"
                  :placeholder="item.placeholder"
                  autocomplete='off'>
        </el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import validate from '../../config/validate.config.js'
import FORM_DATA from '../../config/form.config.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export default {
  name: 'VueBlogBaseForm',

  data () {
    return {
      form: {

      },
      typeList: ['text', 'password']
    };
  },
  props: {
    type: {
      type: String
    }
  },
  created () {
    if (this.type == 'info') {
      this.form = Object.fromEntries(Object.entries(this.$store.getters.userInfo).filter(([key]) => {
        return FORM_DATA['info'].find(item => {
          return key == item['query']
        })
      }))
    }
  },
  computed: {
    validates () {
      return validate
    },
    formData () {
      return FORM_DATA[this.type]
    },
    uploadAvatarUrl () {
      return process.env.VUE_APP_USER_URL
    },
    imageUrl () {
      return this.form.avatar
    }

  },
  methods: {
    initForm () {
      this.form = {}
      this.resetForm()
    },
    resetForm () {
      this.$refs['elForm'].resetFields()
    },
    handleAvatarSuccess (res) {
      this.form.avatar = res.data.fileURL
      NProgress.done()
      this.$notify.success({
        title: '上传成功',
      })
    },
    beforeAvatarUpload (file) {
      const isJPG = /image/g.test(file.type);
      const isLt2M = file.size < 5 * 1024 * 1024;
      console.log(this.$refs.upload)
      if (!isJPG) {
        this.$notify.error({
          title: '图片格式错误'
        })
        this.$refs.upload[0].abort(file)
        return false
      }
      if (!isLt2M) {
        this.$notify.error({
          title: '上传出错',
          message: "大小不能超过5M"
        })
        this.$refs.upload[0].abort(file)
        return false
      }
      NProgress.start()
    }, handleAvatarError (err) {
      this.$notify.error({
        title: '上传出错',
        message: err.message
      })
    }
  }

};
</script>

<style lang="stylus" >
.avatar-uploader .el-upload {
  height: 100px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
  background-color: #fff;
  border-radius: 6px;
}
</style>