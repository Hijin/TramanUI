/**
 *
 *  Created by  JLee on 19/6/19
 */
import trCheckPop from './checkPop/index'
import trPagination from './pagination/index'
import trSelect from './select/index'
import trInput from './input/index'

const components = [
  trCheckPop,
  trPagination,
  trSelect,
  trInput
]

const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 支持解构引用
export {
  install,
  trCheckPop,
  trPagination,
  trSelect,
  trInput
}

// 支持全部引用
export default {
  install,
  ...components
}
