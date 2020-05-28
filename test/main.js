import Vue from 'vue'
import App from './App.vue'
import Bingogo from '../packages/index'

Vue.config.productionTip = false

Vue.use(Bingogo)
new Vue({
  render: h => h(App),
}).$mount('#app')
