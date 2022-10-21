/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-10 22:26:08
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-30 19:11:58
 * @FilePath: \Vue第二十三天 Vue高级  Vue  vue-blog 侧边栏 文章列表\司文超--vue---第二十三天\vue-blog\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: '',
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [{
          analyzerMode: 'static', //可选值有server static disabled
          openAnalyzer: true
        }]).end();
      config
        .plugin('lodash-webpack-plugin')
        .use(require('lodash-webpack-plugin'))
      // 移除 prefetch 插件 初始加载时不加载rel为prefetch的文件
      config.plugins.delete('prefetch')
    }
    config.externals({
      "vue": 'Vue',
      "wangeditor": "wangEditor",
      "vue-wordcloud": "WordCloud"
    })
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("m", resolve("src/components/mobile"))
    // .set("public", resolve("public"));
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.css$|\.html$/,
          algorithm: 'gzip', // 使用gzip压缩
          threshold: 10240, // 只有大小大于该值的资源会被处理。单位是 bytes。
          deleteOriginalAssets: false, // 是否删除原资源
        })]
      }
    }
  }
}