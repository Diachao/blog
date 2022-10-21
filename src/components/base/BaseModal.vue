<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-22 23:35:03
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-25 20:08:49
 * @FilePath: \Vue第二十一天 Vue高级  Vue  vue-blog\司文超--vue---第二十天\vue-blog\src\components\BaseModal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-dialog :title="title"
               :visible.sync="isShow"
               :width='width'
               :before-close="close">
      <BaseForm v-if='hasFormType'
                :type='type'
                ref="form" />
      <div slot="footer"
           class="dialog-footer">
        <el-button v-for='btn in btns'
                   :key="btn.targetName"
                   @click="handlerBtn(btn.targetName,btn.isSubmit)"
                   :type="btn.isSubmit ? 'primary color-write':''">{{ btn.name }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import MAP_MODAL from '../../config/modal.config.js'
import BaseForm from './BaseForm.vue'
const { mapActions, mapState } = createNamespacedHelpers('modal')
export default {
  name: 'VueBlogBaseModal',

  data () {
    return {
      refForm: ''
    };
  },
  components: {
    BaseForm
  },
  computed: {
    ...mapState(['isShow', 'type']),
    isShow () {
      return this.$store.state.modal.isShow
    },
    hasFormType () {
      return MAP_MODAL?.[this.type]?.formType
    },
    btns () {
      return MAP_MODAL?.[this.type]?.btns || [{
        targetName: 'close',
        name: '取消'
      },
      {
        targetName: 'confirm',
        isSubmit: true,
        name: '提交',
      }]
    },
    width () {
      return MAP_MODAL?.[this.type]?.width || "60%"
    },
    title () {
      return MAP_MODAL?.[this.type]?.title || '默认modal'
    },
    updatedPage () {
      return MAP_MODAL?.[this.type]?.updated || false
    }
  },

  mounted () {

  },

  methods: {
    ...mapActions(['open', 'close', 'confirm']),
    handlerBtn (action, isSubmit) {
      if (isSubmit) { //TODO
        this.submitForm()
        return
      }
      if (this.isShow) {
        this[action] && this[action]()
        this.$refs['form'].initForm()//refs不是响应式
      }
    },
    submitForm () {
      let refForm = this.$refs['form']
      refForm.$refs['elForm'].validate(async (valid) => {
        if (valid) {
          try {
            await this.$api({ type: this.type, data: refForm.form })
            //console.log(refForm.form) 这里答应的name是undefined 因为是动态响应 refForm.initForm()把原本name的值给清除了
            this.close()
            refForm.initForm()
            if (this.updatedPage) {
              this.$EventBus.$emit('updatedPage')
            }

          } catch (err) {
            refForm.initForm()
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style>
.color-write span {
  color: #fff !important;
}
</style>