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
      showCodeTwo: false
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
    }
  }
}
</script>

<style scoped>

</style>
