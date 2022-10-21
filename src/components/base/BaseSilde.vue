<template>
  <el-aside class="blog-aside blog-container--wrap">
    <div class='blog-awater'>
      <img :src='userInfo.avatar'
           alt=''>
    </div>
    <div class='blog-info'>
      <h3 class="blog-info--name">{{userInfo.nikname}}</h3>
      <div class="blog-info--state">
        <div class="blog-state--item">
          <a href="#">
            <span class="blog-state--count">{{userInfo.articleCount}}</span>
            <span class="blog-state--name">文章</span>
          </a>
        </div>
        <i class="blog-state-line"></i>
        <div class="blog-state--item">
          <a href="#">
            <span class="blog-state--count">{{userInfo.ColumnCount}}</span>
            <span class="blog-state--name">分类</span>
          </a>
        </div>
      </div>
      <p class="blog-state--self">{{userInfo.signature}}
      </p>
    </div>
  </el-aside>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'VueBlogBaseSilde',

  data () {
    return {

    };
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted () {
    // console.log(userInfo)
  },

  methods: {

  },
};
</script>

<style lang='stylus'>
@import '~assets/css/base.styl';

.blog-container--wrap {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 240px;
  max-width: 240px;
  height: 250px;
  margin-left: 20px;
  margin-top: 40px;
  padding: public-padding;
  padding-bottom: 24px;
  border: 2px solid #222;
  text-align: center;
  overflow: hidden;
}

.blog-awater {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
}

.blog-awater img {
  width: 100%;
  height: auto;
}

.blog-info {
  width: 100%;
}

.blog-info--name {
  margin: 12px;
  font-size: 16px;
  color: #333;
}

.blog-info--state {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-state--item {
  padding: 4px public-padding 4px public-padding;
  font-size: 14px;
}

.blog-state--item a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.blog-state-line {
  width: 1px;
  height: 16px;
  margin: 0 public-padding 0 public-padding;
  background-color: #222;
  transform: scaleX(0.5);
}

.blog-state--self {
  padding: public-padding public-padding 0 public-padding;
  font-size: 14px;
  text-align: left;
  text-indent: 2em;
  color: #000;
}

.blog-state--name {
  padding: public-padding 0;
  color: #000;
}
</style>