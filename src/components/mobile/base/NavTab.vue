<template>
  <van-nav-bar class="blog-nav"
               :title="title"
               left-text="返回"
               left-arrow
               @click-left="$router.back()"
               @click-right="openComment">
    <template #right
              v-if="button">
      <van-button type="info"
                  class="blogm-nav--button">{{button}}</van-button>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'NavTab',
  props: {
    title: { type: String },
    button: { type: String },
    buttonHander: { type: String }
  },
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  methods: {
    openComment () {
      this.$EventBus.$emit(this.buttonHander)
    }
  },
  watch: {},
  created () { },
  mounted () { },
  destroyed () { }
}

</script>
<style lang='stylus'>
.blog-nav .blogm-nav--button {
  height: 2.2em;
}
</style>
