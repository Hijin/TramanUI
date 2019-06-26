/**
*
*  Created by  JLee on 9/6/14
*/
<template>
    <div>
        <h2 class="">Pagination 分页</h2>
        <div class="shadow-hover">
            <div class="border-default p-20 m-t-50">
                <tr-pagination
                        :total="100"
                        :current-page="2"
                        :page-size = 20
                        @on-change="handlePageChanged"
                >
                </tr-pagination>
            </div>
            <div class="bg-light-gray">
                <div class="code-str" :class="{'hidden-code-str':!showCode}">
                    <div class="code-explain">代码示例</div>
                    <pre><code class="html line-height-2">{{codeStr}} </code></pre>
                </div>
            </div>
            <div class="code-str-header" @click="showCode=!showCode">
                <i class="el-icon-caret-bottom" :class="{'show-code-direction': showCode}"></i>
                <span class="m-l-10">{{showCode?'隐藏代码':'显示代码'}}</span>
            </div>
        </div>
        <el-table
                class="m-t-50"
                :data="tableData">
            <el-table-column
                    prop="param"
                    label="参数">
            </el-table-column>
            <el-table-column
                    prop="explain"
                    label="说明">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="类型">
            </el-table-column>
            <el-table-column
                    prop="defaultVal"
                    label="默认值">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      tableData: [{
        param: 'page-size',
        explain: '分页大小',
        type: 'number',
        defaultVal: 10
      }, {
        param: 'total',
        explain: '总共数据',
        type: 'number',
        defaultVal: 0
      }, {
        param: 'current-page',
        explain: '初始化当前页',
        type: 'number',
        defaultVal: 1
      }, {
        param: 'on-change',
        explain: '当前页改变触发回调函数，参数index为选中页码',
        type: 'Function(index)',
        defaultVal: '-'
      }],
      showCode: false
    }
  },
  computed: {
    codeStr: function () {
      return `
      <tr-pagination 
        :total="100"
        :current-page="2"
        :page-size = 20
        @on-change="handlePageChanged">
      </tr-pagination>`
    }
  },
  mounted: function () {
    document.querySelectorAll('pre code').forEach((block) => {
      this.$hljs.highlightBlock(block)
    })
  },
  methods: {
    handlePageChanged (page) {
      console.log(`页码变更${page}`)
    }
  }
}
</script>
