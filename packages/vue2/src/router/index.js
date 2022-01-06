import Vue from 'vue'
import Router from 'vue-router'
import page1 from '../components/page1.jsx'
import page2 from '../components/page2.jsx'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'page1',
        path: '/page1',
        component: page1
      },
      {
        name: 'page2',
        path: '/page2',
        component: page2
      },
      {
        name: 'page3',
        path: '/page3',
        component: () => import('../components/page3.vue')
      }
    ]
  })
}