/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-06-19 21:03:32
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-07-30 19:17:03
 * @FilePath: \vue-blog\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import Home from '../views/Home.vue'
// import Article from '../views/Article.vue'
import ArticleList from '../views/ArticleList'
// import Column from '../views/Column.vue'
// import Editor from '../views/Editor.vue'
// import UserInfo from '../views/UserInfo.vue'
import Socket from '../views/Socket.vue'
//魔术注释(webpack)
const Article = () => import( /* webpackChunkName: 'article' */ '../views/Article.vue')
const Column = () => import( /* webpackChunkName: 'column' */ '../views/Column.vue')
const UserInfo = () => import( /* webpackChunkName: 'user' */ '../views/UserInfo.vue')
const Editor = () => import( /* webpackChunkName: 'editor' */ '../views/Editor.vue')

import MHome from '../mviews/MHome.vue'
import MColumn from '../mviews/MColumn.vue'
import MUser from '../mviews/MUser.vue'
import MArticleList from '../mviews/MArticleList.vue'
import MArticle from '../mviews/MArticle.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    children: [{
      path: '/index',
      name: 'index',
      component: ArticleList,
      props: (route) => {
        return {
          columnId: route.query?.columnId
        }
      }
    }, {
      path: '/column',
      name: 'column',
      component: Column,
      meta: {
        requiredAuth: true
      }
    }, {
      path: '/article/:id',
      name: 'article',
      component: Article
    }, {
      path: '/user',
      name: 'user',
      component: UserInfo
    }, {
      path: '/edit',
      name: 'editor',
      component: Editor,
      props: (route) => {
        return {
          columnId: route.query?.columnId
        }
      }
    }, {
      path: '/socket',
      name: 'socket',
      component: Socket
    }]
  },
  {
    path: '/m',
    name: 'Mhome',
    redirect: '/m/articles',
    component: MHome,
    children: [{
      //这里的路径相当于 /m/article
      path: 'articles',
      name: 'mArticleList',
      component: MArticleList,
      meta: {
        type: 'SearchTab'
      }
    }, {
      path: 'article/:id',
      name: 'marticle',
      component: MArticle,
      meta: {
        type: 'NavTab',
        title: '文章',
        buttonHander: "open-comment",
        button: '评论'
      }
    }, {
      path: 'column',
      name: 'mColumn',
      component: MColumn,
      meta: {
        type: 'NavTab',
        title: '分类'
      }
    }, {
      path: 'user',
      name: 'mUser',
      component: MUser,
      meta: {
        type: 'NavTab',
        title: '个人'
      },
      props: (route) => {
        return {
          state: route.query?.state
        }
      }
    }, ]
  }
]




const router = new VueRouter({
  routes
})
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (to.meta.requiredAuth && !store.state.token) {
    Vue.prototype.$notify.warning({
      title: '通知',
      message: '请先登录'
    })
    NProgress.done()
    // router.push({name:"home"}).catch(err=>{
    //   return err
    // })
    next('/index')
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router