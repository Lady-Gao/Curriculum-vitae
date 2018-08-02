import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/index'
import land from '@/view/entrance'
import SecondHand from '@/view/SecondHand/index'
import flex from '@/view/flex'
import dome from '@/view/dome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }, 
     {
       path: '/',
       name: 'land',
       component: land
     },
     {
       path: '/SecondHand',
       name: 'SecondHand',
       component: SecondHand
     },
     {
       path: '/dome',
       name: 'dome',
       component: dome
     },
     {
       path: '/dome/flex',
       name: 'flex',
       component: flex
     },
     {
       path: '*',
       redirect: "/"

     }
  ]
})
