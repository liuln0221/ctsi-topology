import Vue from 'vue'
import App from './App.vue'

// 单独引入指令文件
// import pkgName from '../packages/test-directive/index'
// 整体引入包
import pkgName from '../packages/index'

import '@/styles/index.css'

Vue.use(pkgName)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')