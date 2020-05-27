import version from '../version.js'
import BggButton from './button/index.js'

// 组件列表
const components = [
  BggButton
]

const install = Vue => {
  components.forEach(component => {
    Vue.use(component.name, component)
  })
}

// 判断是否引入vue
if (typeof window !== 'undefined' && window.Vue) {
  install(Vue)
}

export default {
  // 必须要有install 才能被vue.use()安装
  install,
  BggButton,
  version
}
