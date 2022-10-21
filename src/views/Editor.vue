<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-13 19:56:27
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-27 10:07:35
 * @FilePath: \Vue第二十五天 Vue高级  Vue  vue-blog Scroll优化 文章编辑\司文超--vue---第二十四天\vue-blog\src\views\Editor.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blog-write">

    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">标题</h3>
      </div>
      <input type='text'
             class="blog-write--input"
             placeholder="文章标题"
             v-model="title">
    </div>
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-content">内容</h3>
      </div>
      <div class="panel-body">
        <div class='blog-write__container'
             id="blog-write__container"> </div>
      </div>
    </div>
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-column">分类</h3>
      </div>
      <div class="blog-writ--column">
        <EidtorColumn ref="editorColumn"
                      :columnId="columnId" />
      </div>
    </div>
    <div class='blog-write__control'>
      <el-button type="success"
                 round
                 @click="submitArticle">提交</el-button>
      <el-button type="info"
                 round
                 @click="clearEidtor">清空</el-button>
    </div>
  </div>
</template>

<script>
import wangEditor from 'wangeditor'
import EidtorColumn from '@/components/editor/EditorColumn.vue'
export default {

  name: 'VueBlogScrollEditor',

  data () {
    return {
      editor: null,
      content: '',
      title: ''
    };
  },
  props: {
    columnId: { type: String }
  },
  components: {
    EidtorColumn
  },
  mounted () {
    const editor = new wangEditor(`#blog-write__container`)
    editor.config.onchange = (newHtml) => {
      this.content = newHtml
    }
    editor.config.uploadImgServer = process.env.VUE_APP_COVER_URL
    editor.config.uploadImgMaxSize = 5 * 1024 * 1024 // 5M
    editor.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
    editor.config.uploadImgMaxLength = 5
    editor.config.uploadFileName = 'file'
    editor.config.uploadImgHeaders = {
      'Authorization': `Bearer ${this.$store.state.token}`,
    }
    //TODO 可以优化
    editor.config.customAlert = (s) => {
      this.$notify.warning({
        title: '校验未通过',
        message: '图片过大'
      })
      /**
       * s 是指 错误提示
       * t 是指 类型
       */
    };

    // 创建编辑器
    editor.create()
    this.editor = editor
  },

  methods: {
    clearEidtor () {
      this.editor.txt.clear()
    },
    submitArticle () {
      if (!this.validate()) {
        return
      }
      this.postArticle()
    },
    validate () {
      if (this.title.trim().length === 0) {
        this.$notify.error({
          title: '错误',
          message: '标题不能为空'
        })
        return false
      }
      if (this.content.trim().length === 0) {
        this.$notify.error({
          title: '错误',
          message: '内容不能为空'
        })
        return false
      }
      return true
    },
    async postArticle () {
      let articleData = {
        body: this.content,
        title: this.title,
        column: this.$refs['editorColumn'].column,
        pic: this.content.match(/<img src="([^'"]*)"/)?.[1]
      }
      try {
        this.$api({ type: "postArticle", data: JSON.parse(JSON.stringify(articleData)) })//JSON.stringify()会把为值undefined的属性去掉
        this.$notify.success({
          title: '成功',
          message: '提交成功'
        })
        this.$router.push('/index')
      } catch (err) {
        this.$notify.error({
          title: '错误',
          message: err.message
        })
      }
    }
  },

  beforeDestroy () {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy()
    this.editor = null
  }
};
</script>

<style lang="stylus">
@import '~assets/css/base.styl';

.blog-write {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 920px;
  overflow: hidden;
  padding: public-padding;
  border: 1px solid #ccc;

  & .panel {
    width: 740px;
    margin-bottom: 8px;

    & .panel-title, .panel-content, .panel-column {
      width: 100%;
      line-height: 32px;
      padding: 0 12px;
      background-color: rgba(64, 158, 255, 0.4);
      color: #fff;
      border-bottom: 1px solid #ccc;
      border-radius: 4px;
    }

    & .panel-content {
      background-color: rgba(230, 162, 60, 0.4);
    }

    & .panel-column {
      background-color: rgba(103, 194, 58, 0.4);
    }

    & .blog-write--input {
      box-sizing: border-box;
      width: 100%;
      line-height: 48px;
      padding: 0 10px;
      outline: none;
      border: 0;
      border-radius: 4px;
      font-size: 18px;
    }
  }

  & .blog-writ--column {
    display: flex;
    flex-wrap: wrap;

    &>li {
      width: 16%;
      min-width: 100px;
      margin: 8px public-padding;
      line-height: 60px;
      background-color: #EFEBDC;
      border: 1px solid #222;
      border-radius: 10px;
      text-align: center;
      cursor: pointer;
    }

    & .selected {
      background-color: #ccc;
      color: #fff;
    }
  }
}

.blog-write__control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 740px;
  border-top: 0;
}
</style>