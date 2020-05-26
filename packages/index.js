import BggButton from './Button/index.vue'

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

// 导出的对象必须具有 install 方法才能被vue.use()
export default {
  BggButton
}
