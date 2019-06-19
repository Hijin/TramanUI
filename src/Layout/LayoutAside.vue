/**
*
*  Created by  JLee on 19/6/11
*/
<template>
    <el-aside class="h-full flex-col flex-v-center flex-h-center">
        <el-menu class="el-menu-vertical-demo h-full w-full" router :default-active="menus && menus.length>0 && menus[0].path">
            <el-menu-item v-for="menu in menus" :index="menu.path" :key="menu.path">
                <span slot="title">{{menu.title}}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script>
import menu from '../router/menu'

export default {
  name: 'LayoutAside',
  data () {
    return {
      menus: menu
    }
  },

  mounted: function () {

  }
}
</script>

<style scoped>
    .el-aside {
        width: 30%;
        border-right: 1px solid #efefef;
    }
</style>
