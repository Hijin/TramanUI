/**
 *
 *  Created by  JLee on 19/6/19
 */
import Pagination from './src/TramanPagination'

Pagination.install = function (Vue) {
  Vue.component(Pagination.name, Pagination)
}

export default Pagination
