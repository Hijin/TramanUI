import Vue from 'vue'
import ElementUI from 'element-ui'
import TramanUI from '../packages/index'
import App from './App.vue'
import router from './router/router'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import './styles/common.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$hljs = hljs
Vue.use(ElementUI)
Vue.use(TramanUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
