/**
*
*  Created by  JLee on 19/7/19
*/
<template>
    <div>
        <h2 class="">Input 搜索</h2>
        <h3 class="m-t-50">基本用法</h3>
        <span class="m-t-20 color-default">适用需要触发搜索事件的输入</span>
        <div class="shadow-hover m-t-20">
            <div class="border-default p-20 m-t-20">
                <tr-input
                        class="w-250"
                        v-model="searchInput"
                        placeholder="请输入搜索"
                        @enter="searchAction"></tr-input>
            </div>
            <div class="bg-light-gray">
                <div class="code-str" :class="{'hidden-code-str':!showCodeOne}">
                    <div class="code-explain">代码示例</div>
                    <pre><code class="html line-height-2">{{codeStrOne}} </code></pre>
                </div>
            </div>
            <div class="code-str-header" @click="showCodeOne=!showCodeOne">
                <i class="el-icon-caret-bottom" :class="{'show-code-direction': showCodeOne}"></i>
                <span class="m-l-10">{{showCodeOne?'隐藏代码':'显示代码'}}</span>
            </div>
        </div>
        <h3 class="m-t-50">Input Attributes</h3>
        <el-table
                class="m-t-20"
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
        <h3 class="m-t-50">Input Events</h3>
        <el-table
                class="m-t-20"
                :data="tableDataEvents">
            <el-table-column
                    prop="eventName"
                    label="事件名称">
            </el-table-column>
            <el-table-column
                    prop="explain"
                    label="说明">
            </el-table-column>
            <el-table-column
                    prop="returnParam"
                    label="回调参数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      searchInput: '',
      showCodeOne: false,
      tableData: [{
        param: 'value/v-model',
        explain: '默认选择值',
        type: 'String',
        defaultVal: ''
      }, {
        param: 'placeholder',
        explain: '占位符',
        type: 'String',
        defaultVal: '请输入...'
      }],
      tableDataEvents: [{
        eventName: 'clear',
        explain: '清除时触发',
        returnParam: '输入值'
      }, {
        eventName: 'blur',
        explain: '失去焦点时触发',
        returnParam: '输入值'
      }, {
        eventName: 'enter',
        explain: '键入enter或点击搜索时触发',
        returnParam: '输入值'
      }]
    }
  },
  computed: {
    codeStrOne: function () {
      return `
      <template>
        <tr-input
           v-model="searchInput"
           placeholder="请输入搜索"
           @enter="searchAction"></tr-input>
      <template>

      <script>
        export default {
            data () {
              return {
                  searchInput:''
                }
            }
        }
      </` + 'script>'
    }
  },
  mounted: function () {
    document.querySelectorAll('pre code').forEach((block) => {
      this.$hljs.highlightBlock(block)
    })
  },
  methods: {
    searchAction: function () {
    }
  }
}
</script>

<style scoped>

</style>
