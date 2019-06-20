/**
*
*  Created by  JLee on 9/6/14
*@props pageSize 分页大小，默认 10
*@props total 总共数据，默认 0
*@props currentPage  初始化当前页，默认1
*@on-change(index)  当前页改变触发
*/
<template>
    <div class="tr-pagination-body">
        <div style="flex: 1">共{{total}}条，当前为第{{current}}页</div>
        <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="current"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="total">
        </el-pagination>
        <div class="tr-pagination-search">
            <el-input v-model="pageInput" @keyup.enter.native="handleSearch()">
                <button slot="append" @click="handleSearch()">GO</button>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
  name: 'trPagination',
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      pageInput: '',
      current: 1
    }
  },
  mounted: function () {
    this.current = this.currentPage
  },
  methods: {
    handleCurrentChange (page) {
      this.current = page
      this.$emit('on-change', this.current)
    },
    handleSearch () {
      if (
        !new RegExp(/^[0-9]*$/).test(this.pageInput) ||
          parseInt(this.pageInput) === 0 ||
          parseInt(this.pageInput) > Math.ceil(this.total / this.pageSize)
      ) {
        this.pageInput = this.current
        return
      }
      this.current = parseInt(this.pageInput)
      this.$emit('on-change', this.current)
    }
  },
  watch: {
    currentPage: {
      handler (n, o) {
        this.current = n
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .tr-pagination-body {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        z-index: 3;
    }
    .tr-pagination-search {
        position: relative;
        margin-left: 16px;
        width: 80px;
        button {
            background: white;
            width: 30px !important;
            height: 30px;
            padding-left: 0px;
            padding-right: 0px;
            margin-left: -29px !important;
            border: 1px solid #E3E2E5;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            border-left: none;
            color: #7c8591;
        }
    }
    /deep/ .el-input {
        top: -2px;
    }
    /deep/ .el-input__inner {
        height: 30px;
        width: 50px;
    }
    /deep/ .el-pager li{
        background: #FFFFFF;
        border: 1px solid #E3E2E5;
        border-radius: 4px;
        color: #7B7C84;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        padding: 0px;
        min-width: 30px;
    }
    /deep/ li.active{
        background: #2589FF;
        color: white !important;
    }
    /deep/ li.active + li {
        border-left: 1px solid #E3E2E5;
    }
    /deep/ .btn-prev, /deep/ .btn-next {
        background: #FFFFFF;
        border: 1px solid #E3E2E5;
        border-radius: 4px;
        width: 30px;
        min-width: 30px;
        padding: 0px !important;
        margin-left: 10px !important;
    }
    /deep/ .el-input-group__append {
        padding: 0px;
        border: none;
    }
</style>
