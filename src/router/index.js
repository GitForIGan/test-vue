import Vue from 'vue'
import Router from 'vue-router'
import VueAsyncData from 'vue-async-data'
import HelloWorld from '@/components/HelloWorld'
import HaHa from '@/components/HelloGx'
import List from '@/components/list.vue'
import asi  from '@/components/asi.vue'
Vue.use(Router)
Vue.use(VueAsyncData);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'HaHa',
      component: HaHa
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/asi',
      name: 'asi',
      component: asi
    },
  ]
})
