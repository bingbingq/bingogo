import version from '../version.js'
import Button from './button/index.js'
import Alert from './alert/index.js'

import './fonts/font.scss'
// 组件列表
const components = [
  Alert,
  Button
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否是直接引入的 vue
if (window && window.Vue) {
  install(Vue)
}

const bingogo = {
  version,
  // 必须要有install 才能被vue.use()安装
  install,
  Alert,
  Button,
}
export default bingogo
