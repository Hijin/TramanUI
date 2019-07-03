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
                        :option-data="options"
                        createOptionable
                        @on-change="selectChanged"
                        @on-create-option="createOptionAction">
                </tr-select>
            </div>
            <div class="bg-light-gray">
                <div class="code-str" :class="{'hidden-code-str':!showCodeFour}">
                    <div class="code-explain">代码示例, 设置<span class="code-line">createOptionable</span> 为<span class="code-line">true</span>时，可以创建并选中选项中不存在的条目，通过<span class="code-line">on-create-option</span>方法捕获创建事件，更新select数据选项</div>
                    <pre><code class="html line-height-2">{{codeStrFour}} </code></pre>
                </div>
            </div>
            <div class="code-str-header" @click="showCodeFour=!showCodeFour">
                <i class="el-icon-caret-bottom" :class="{'show-code-direction': showCodeFour}"></i>
                <span class="m-l-10">{{showCodeFour?'隐藏代码':'显示代码'}}</span>
            </div>
        </div>
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
      showCodeOne: false,
      showCodeTwo: false,
      showCodeThree: false,
      showCodeFour: false
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
      console.log(values)
    },
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
</script>

<style scoped>

</style>
