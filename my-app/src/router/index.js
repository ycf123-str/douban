import Vue from 'vue'
import Router from 'vue-router'
import shouYe from '../pages/shouye'
import dianYing from '../pages/dianying'
import tuShu from '../pages/tushu'
import guangBo from '../pages/guangbo'
import xiaoZu from '../pages/xiaozu'
import routerAll from '../pages/routerall'
import login from '../pages/login'
import reg from '../pages/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shouye',
      name: 'shouYe',
      component: shouYe
    },
    {
      path: '/dianying',
      name: 'dianYing',
      component: dianYing
    },
    {
      path: '/tushu',
      name: 'tuShu',
      component: tuShu
    },
    {
      path: '/guangbo',
      name: 'guangBo',
      component: guangBo
    },
    {
      path: '/xiaozu',
      name: 'xiaoZu',
      component: xiaoZu
    },
    {
      path: '/routerall',
      name: 'routerAll',
      component: routerAll
    },
    {
      path:"/login",
      name:"login",
      component:login
    },
    {
      path:"/reg",
      name:"reg",
      component:reg
    },
    {
      path:"/*",
      redirect:"/shouye"
    }
  ]
})
