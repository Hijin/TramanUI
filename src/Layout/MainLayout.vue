/**
*
*  Created by  JLee on 19/6/11
*/
<template>
    <el-container class="h-full flex-col">
        <layout-header></layout-header>
        <el-container class="flex-1 flex-row">
            <layout-aside class="h-full"></layout-aside>
            <el-container class="flex-1">
                <el-main class="h-full overflow-auto">Main</el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import LayoutHeader from './LayoutHeader'
import LayoutAside from './LayoutAside'
export default {
  name: 'MainLayout',
  components: { LayoutHeader, LayoutAside }
}
</script>

<style scoped>

</style>
