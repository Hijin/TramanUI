/**
 *
 *  Created by  JLee on 19/6/19
 */
import trCheckPop from './checkPop/index'
import trPagination from './pagination/index'

const components = [
  trCheckPop,
  trPagination
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

export default {
  install,
  trCheckPop,
  trPagination
}
