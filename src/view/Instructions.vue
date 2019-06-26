/**
*
*  Created by  JLee on 19/6/19
*/
<template>
    <div>
        <div class="m-t-50">
            <h2>引入ElementUI</h2>
            <div class="m-t-20 color-default text-14  ">
                该组件库依赖于 ElementUI  实现，因此需要<span class="code-line">npm i element-ui</span>，ElementUI 引入使用请参考ElementUI 文档（<a href="https://element.eleme.cn/#/zh-CN/component/installation" target="_blank" class="color-blue">https://element.eleme.cn/#/zh-CN/component/installation</a>)
            </div>
        </div>
        <div class="m-t-50">
            <h2>引入css loader</h2>
            <div class="m-t-20 color-default text-14">
                css解析使用scss，需要<span class="code-line">npm install node-sass && npm install sass-loader</span>
            </div>
        </div>
        <div class="m-t-50">
            <h2>TramanUI 引入</h2>
            <div class="m-t-20 color-default text-14">加入TramanUI依赖 <span class="code-line">install ui-traman</span>, 源码地址github：<a href="https://github.com/Hijin/TramanUI.git" target="_blank" class="color-blue">https://github.com/Hijin/TramanUI.git</a></div>
            <div class="m-t-20 color-default text-14 p-20 bg-light-gray pre">
                import Vue from 'vue'
                import TramanUI from 'ui-traman'

                Vue.use(TramanUI)
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'Instructions',
  mounted: function () {
    document.querySelectorAll('pre code').forEach((block) => {
      this.$hljs.highlightBlock(block)
    })
  }
}
</script>

<style scoped>

</style>
