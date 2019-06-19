/**
*
*  Created by  JLee on 19/6/18
*/
<template>
    <div>
        <h2 class="">CheckPop 弹框选择</h2>
        <h3 class="m-t-50">带分组选择</h3>
        <div class="shadow-hover">
            <div class="border-default p-20 m-t-20">
                <tr-check-pop
                        title="自定义列表"
                        :data="checkDataOne"
                        :width="500"
                        :column="3"
                        save-key="saveTabOne"
                        @on-confirm="checkConfirm"
                >
                </tr-check-pop>
            </div>
            <div class="pre bg-light-gray p-20">
                <div class="code-explain">代码示例，当传的  data  数据结构存在孩子节点数据  propsData  时，渲染为分组</div>
                {{codeStrOne}}
            </div>
        </div>
        <h3 class="m-t-50">普通组选择</h3>
        <div class="shadow-hover">
            <div class="border-default p-20 m-t-20">
                <tr-check-pop
                        title="自定义列表"
                        :data="checkDataTwo"
                        :width="500"
                        :column="3"
                        save-key="saveTabTwo"
                        @on-confirm="checkConfirm"
                >
                </tr-check-pop>
            </div>
            <div class="pre bg-light-gray p-20">
                <div class="code-explain">代码示例， 当传的  data  数据结构不存在孩子节点数据  propsData  时，渲染为普通选择</div>
                {{codeStrTwo}}
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
import trCheckPop from '../components/TramanCheckPop'
export default {
  name: 'CheckPop',
  components: { trCheckPop },
  data () {
    return {
      checkDataOne: [],
      checkDataTwo: [],
      tableData: [{
        param: 'title',
        explain: '按钮显示文字',
        type: 'string',
        defaultVal: '自定义'
      }, {
        param: 'data',
        explain: '操作数据，支持两种模式数据，见示例model',
        type: 'Array',
        defaultVal: '[]'
      }, {
        param: 'width',
        explain: 'model宽度',
        type: 'number',
        defaultVal: 500
      }, {
        param: 'column',
        explain: 'model一行展示列数量',
        type: 'number',
        defaultVal: 4
      }, {
        param: 'save-key',
        explain: '存储的 Key 值， 传递值非空时自动存储',
        type: 'string',
        defaultVal: '-'
      }, {
        param: 'on-confirm',
        explain: '确定时回调函数，参数data为操作后的数据',
        type: 'Function(data)',
        defaultVal: '-'
      }],
      codeStrOne: '',
      codeStrTwo: ''
    }
  },
  mounted: function () {
    this.initCheckData()
    this.codeStrOne = '<tr-check-pop\n' +
      '                        title="自定义列表"\n' +
      '                        :data="checkDataOne"\n' +
      '                        :width="500"\n' +
      '                        :column="3"\n' +
      '                        save-key="saveTabOne"\n' +
      '                        @on-confirm="checkConfirm"\n' +
      '              >\n' +
      '              </tr-check-pop>\n' +
      '\n' +
      '\n' +
      'checkDataOne:\n' +
      '[\n' +
      '  {\n' +
      '    "title": "分组0",\n' +
      '    "key": "0",\n' +
      '    "propsData": [\n' +
      '      {\n' +
      '        "label": "选项0长字段属性",\n' +
      '        "key": "0-0",\n' +
      '        "checked": false\n' +
      '      },\n' +
      '      {\n' +
      '        "label": "选项1",\n' +
      '        "key": "0-1",\n' +
      '        "checked": false\n' +
      '      },\n' +
      '      {\n' +
      '        "label": "选项2长字段属性",\n' +
      '        "key": "0-2",\n' +
      '        "checked": false\n' +
      '      },\n' +
      '      {\n' +
      '        "label": "选项3",\n' +
      '        "key": "0-3",\n' +
      '        "checked": false\n' +
      '      }\n' +
      '    ]\n' +
      '  },\n' +
      '  {\n' +
      '    "title": "分组1",\n' +
      '    "key": "1",\n' +
      '    "propsData": [\n' +
      '      {\n' +
      '        "label": "选项0长字段属性",\n' +
      '        "key": "1-0",\n' +
      '        "checked": false\n' +
      '      },\n' +
      '      {\n' +
      '        "label": "选项1",\n' +
      '        "key": "1-1",\n' +
      '        "checked": false\n' +
      '      },\n' +
      '      {\n' +
      '        "label": "选项2长字段属性",\n' +
      '        "key": "1-2",\n' +
      '        "checked": false\n' +
      '      },\n' +
      '      {\n' +
      '        "label": "选项3",\n' +
      '        "key": "1-3",\n' +
      '        "checked": false\n' +
      '      }\n' +
      '    ]\n' +
      '  }\n' +
      ']'
    this.codeStrTwo = '<tr-check-pop\n' +
      '                        title="自定义列表"\n' +
      '                        :data="checkDataTwo"\n' +
      '                        :width="500"\n' +
      '                        :column="3"\n' +
      '                        save-key="saveTabTwo"\n' +
      '                        @on-confirm="checkConfirm"\n' +
      '                >\n' +
      '                </tr-check-pop>\n' +
      '\n' +
      '\n' +
      'checkDataTwo:' +
      '[\n' +
      '  {\n' +
      '    "label": "选项0长字段属性",\n' +
      '    "key": "0",\n' +
      '    "disabled": true\n' +
      '  },\n' +
      '  {\n' +
      '    "label": "选项1",\n' +
      '    "key": "1",\n' +
      '    "disabled": false\n' +
      '  },\n' +
      '  {\n' +
      '    "label": "选项2长字段属性",\n' +
      '    "key": "2",\n' +
      '    "disabled": true\n' +
      '  },\n' +
      '  {\n' +
      '    "label": "选项3",\n' +
      '    "key": "3",\n' +
      '    "disabled": false\n' +
      '  },\n' +
      '  {\n' +
      '    "label": "选项4长字段属性",\n' +
      '    "key": "4",\n' +
      '    "disabled": true\n' +
      '  }\n' +
      ']'
  },
  methods: {
    initCheckData: function () {
      for (var index = 0; index < 2; index++) {
        var groupItem = {
          title: `分组${index}`,
          key: `${index}`,
          propsData: []
        }
        for (var childIndex = 0; childIndex < 4; childIndex++) {
          var propsItem = {
            label: `选项${childIndex}` + (childIndex % 2 === 0 ? '长字段属性' : ''),
            key: `${index}-${childIndex}`,
            checked: false
          }
          groupItem.propsData.push(propsItem)
        }
        this.checkDataOne.push(groupItem)
      }
      for (var i = 0; i < 5; i++) {
        var item = {
          label: `选项${i}` + (i % 2 === 0 ? '长字段属性' : ''),
          key: `${i}`,
          disabled: i % 2 === 0
        }
        this.checkDataTwo.push(item)
      }
    },
    checkConfirm: function (data) {
      console.log(data, this.checkDataOne, this.checkDataTwo)
    }
  }
}
</script>

<style scoped>

</style>
