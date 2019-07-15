/**
*
*  Created by  JLee on 19/7/2
*/
<template>
    <div>
        <h2 class="">Pagination 分页</h2>
        <h3 class="m-t-50">基本用法</h3>
        <span class="m-t-20 color-default">适用基础单选</span>
        <div class="shadow-hover m-t-20">
            <div class="border-default p-20 m-t-20">
                <tr-select
                        class="w-150"
                        :option-data="options"
                        @on-change="selectChanged">
                </tr-select>
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
        <h3 class="m-t-50">基础多选</h3>
        <span class="m-t-20 color-default">适用基础多选</span>
        <div class="shadow-hover m-t-20">
            <div class="border-default p-20 m-t-20">
                <tr-select
                        class="w-150"
                        v-model="selectVal"
                        :option-data="options"
                        :multiple="true"
                        @on-change="selectChanged">
                </tr-select>
            </div>
            <div class="bg-light-gray">
                <div class="code-str" :class="{'hidden-code-str':!showCodeTwo}">
                    <div class="code-explain">代码示例, 设置<span class="code-line">multiple</span> 为<span class="code-line">true</span>时，展示多选</div>
                    <pre><code class="html line-height-2">{{codeStrTwo}} </code></pre>
                </div>
            </div>
            <div class="code-str-header" @click="showCodeTwo=!showCodeTwo">
                <i class="el-icon-caret-bottom" :class="{'show-code-direction': showCodeTwo}"></i>
                <span class="m-l-10">{{showCodeTwo?'隐藏代码':'显示代码'}}</span>
            </div>
        </div>
        <h3 class="m-t-50">可搜索</h3>
        <span class="m-t-20 color-default">可以利用搜索功能快速查找选项</span>
        <div class="shadow-hover m-t-20">
            <div class="border-default p-20 m-t-20">
                <tr-select
                        class="w-150"
                        :option-data="options"
                        searchable
                        @on-change="selectChanged">
                </tr-select>
            </div>
            <div class="bg-light-gray">
                <div class="code-str" :class="{'hidden-code-str':!showCodeThree}">
                    <div class="code-explain">代码示例, 设置<span class="code-line">searchable</span> 为<span class="code-line">true</span>时，可支持快捷搜索</div>
                    <pre><code class="html line-height-2">{{codeStrThree}} </code></pre>
                </div>
            </div>
            <div class="code-str-header" @click="showCodeThree=!showCodeThree">
                <i class="el-icon-caret-bottom" :class="{'show-code-direction': showCodeThree}"></i>
                <span class="m-l-10">{{showCodeThree?'隐藏代码':'显示代码'}}</span>
            </div>
        </div>
        <h3 class="m-t-50">创建条目</h3>
        <span class="m-t-20 color-default">可以创建选项中不存在的条目</span>
        <div class="shadow-hover m-t-20">
            <div class="border-default p-20 m-t-20">
                <tr-select
                        class="w-150"
                        :option-data="options"
                        createOptionable
                        @on-change="selectChanged"
                        @on-create-option="createOptionAction">
                </tr-select>
            </div>
            <div class="bg-light-gray">
                <div class="code-str" :class="{'hidden-code-str':!showCodeFour}">
                    <div class="code-explain">代码示例, 设置<span class="code-line">createOptionable</span> 为<span class="code-line">true</span>时，可以创建选项中不存在的条目，通过<span class="code-line">on-create-option</span>方法捕获创建事件，更新select数据选项</div>
                    <pre><code class="html line-height-2">{{codeStrFour}} </code></pre>
                </div>
            </div>
            <div class="code-str-header" @click="showCodeFour=!showCodeFour">
                <i class="el-icon-caret-bottom" :class="{'show-code-direction': showCodeFour}"></i>
                <span class="m-l-10">{{showCodeFour?'隐藏代码':'显示代码'}}</span>
            </div>
        </div>
        <h3 class="m-t-50">Select Attributes</h3>
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
        <h3 class="m-t-50">Select Events</h3>
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
  name: 'Select',
  data () {
    return {
      options: [{
        label: '选项1',
        value: 1
      }, {
        label: '选项2',
        value: 2
      }, {
        label: '选项3',
        value: 3
      }],
      selectVal: [1, 3],
      showCodeOne: false,
      showCodeTwo: false,
      showCodeThree: false,
      showCodeFour: false,
      tableData: [{
        param: 'value/v-model',
        explain: '默认选择值',
        type: 'String, Number, Array',
        defaultVal: '-'
      }, {
        param: 'placeholder',
        explain: '占位符',
        type: 'String',
        defaultVal: '请选择'
      }, {
        param: 'clearable',
        explain: '是否可以清空选项',
        type: 'boolean',
        defaultVal: 'false'
      }, {
        param: 'multiple',
        explain: '是否多选',
        type: 'boolean',
        defaultVal: 'false'
      }, {
        param: 'optionData',
        explain: '选项数据',
        type: 'Array',
        defaultVal: '[]'
      }, {
        param: 'placeholder',
        explain: '没有选择值时填充文案',
        type: 'String',
        defaultVal: '请选择'
      }, {
        param: 'keyAttri',
        explain: 'key属性字段名',
        type: 'String',
        defaultVal: 'value'
      }, {
        param: 'labelAttri',
        explain: 'label属性字段名',
        type: 'String',
        defaultVal: 'label'
      }, {
        param: 'valueAttri',
        explain: 'value属性字段名',
        type: 'String',
        defaultVal: 'value'
      }, {
        param: 'disabledAttri',
        explain: 'disabled属性字段名',
        type: 'String',
        defaultVal: 'disabled'
      }, {
        param: 'searchable',
        explain: '是否可搜索',
        type: 'boolean',
        defaultVal: 'false'
      }, {
        param: 'searchPlaceholder',
        explain: '搜索框占位符',
        type: 'String',
        defaultVal: '请输入搜索内容'
      }, {
        param: 'createOptionable',
        explain: '是否可快捷创建选项',
        type: 'boolean',
        defaultVal: 'false'
      }, {
        param: 'loading',
        explain: '是否加载中',
        type: 'boolean',
        defaultVal: 'false'
      }],
      tableDataEvents: [{
        eventName: 'on-change',
        explain: '选中值发生改变时触发',
        returnParam: '目前选中值'
      }, {
        eventName: 'on-create-option',
        explain: '新建选项时触发',
        returnParam: '新选项label文案'
      }]
    }
  },
  computed: {
    codeStrOne: function () {
      return `
      <template>
        <tr-select
           :option-data="options"
           @on-change="selectChanged">
         </tr-select>
      <template>

      <script>
        export default {
            data () {
              return {
                  options: [{
                    label: '选项1',
                    value: 1
                  }, {
                    label: '选项2',
                    value: 2
                  }, {
                    label: '选项3',
                    value: 3
                  }]
                }
            }
        }
      </` + 'script>'
    },
    codeStrTwo: function () {
      return `
      <template>
        <tr-select
           :option-data="options"
           :multiple="true"
           @on-change="selectChanged">
         </tr-select>
      <template>

      <script>
        export default {
            data () {
              return {
                  options: [{
                    label: '选项1',
                    value: 1
                  }, {
                    label: '选项2',
                    value: 2
                  }, {
                    label: '选项3',
                    value: 3
                  }]
                }
            }
        }
      </` + 'script>'
    },
    codeStrThree: function () {
      return `
      <template>
        <tr-select
           :option-data="options"
           searchable
           @on-change="selectChanged">
         </tr-select>
      <template>

      <script>
        export default {
            data () {
              return {
                  options: [{
                    label: '选项1',
                    value: 1
                  }, {
                    label: '选项2',
                    value: 2
                  }, {
                    label: '选项3',
                    value: 3
                  }]
                }
            }
        }
      </` + 'script>'
    },
    codeStrFour: function () {
      return `
      <template>
        <tr-select
           :option-data="options"
           createOptionable
           @on-change="selectChanged"
           @on-create-option="createOptionAction">
         </tr-select>
      <template>

      <script>
        export default {
            data () {
              return {
                  options: [{
                    label: '选项1',
                    value: 1
                  }, {
                    label: '选项2',
                    value: 2
                  }, {
                    label: '选项3',
                    value: 3
                  }]
                }
            },
            methods: {
              createOptionAction: function (newOptionVal) {
                  setTimeout(() => {
                    this.options.push({
                      label: newOptionVal,
                      value: this.options.length + 1
                    })
                  }, 2000)
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
    selectChanged: function (values) {
      // console.log(values)
    },
    createOptionAction: function (newOptionVal) {
      setTimeout(() => {
        this.options.push({
          label: newOptionVal,
          value: this.options.length + 1
        })
      }, 2000)
    }
  },
  watch: {
    'selectVal': function (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style scoped>

</style>
