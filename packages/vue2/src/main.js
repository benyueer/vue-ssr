import Vue from 'vue'
import App from './App.vue'
import createRouter from './router/index'

Vue.config.productionTip = false


export default function () {

  const router = createRouter()
  const app = new Vue({
    render: h => h(App),
  })

  return {app, router}
}