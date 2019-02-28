import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FooterBar from '@/components/footerBar'
import Index from '../view/index/index'
import Item2 from '../view/item2/index'
import Item3 from '../view/item3/index'
import VIP from '../view/vip/index'
Vue.use(Router)

export default new Router({
  routes: [
    //导航栏的三个路由
    {
      path: '/',
      name: '/Index',
      component: Index
    },
    {
      path: '/item2',
      name: '/Item2',
      component:Item2
    },
    {
      path: '/item3',
      name: '/Item3',
      component: Item3
    },

    //加入会员的路由
    {
      path:'/vip',
      name:'/VIP',
      component:VIP
    },
    
    {
      path:'/footerBar',
      name:'footerBar',
      component:FooterBar
    }
  ]
})
