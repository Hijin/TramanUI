/**
*
*  Created by  JLee on 19/7/19
*/
<template>
  <div class="pub-search">
    <el-input
      class="search-input"
      size="small"
      :placeholder="placeholder"
      v-model="searchInput"
      @blur="blurAction"
      @keyup.native.enter="enterAction"
      @clear="clearAction"
      clearable
    ></el-input>
    <el-button @click="enterAction" class="search-button" icon="el-icon-search"></el-button>
  </div>
</template>

<script>
export default {
  name: 'trInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入...'
    }
  },
  data () {
    return {
      searchInput: this.value
    }
  },
  methods: {
    blurAction: function () {
      this.$emit('blur', this.searchInput)
    },
    enterAction: function () {
      this.$emit('enter', this.searchInput)
    },
    clearAction: function () {
      this.$emit('clear', this.searchInput)
    }
  },
  watch: {
    value: function (newVal, oldVal) {
      this.searchInput = newVal
    },
    searchInput: function (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<style scoped lang="scss">
  .pub-search {
    display: flex;
    justify-content: space-between;
    position: relative;
    .search-input {
      position: relative;
      z-index: 10;
    }
    .search-button {
      width: 30px;
      height: 28px;
      font-size: 14px;
      padding: 0;
      margin: 0;
      text-align: center;
      position: absolute;
      top: 1px;
      right: 1px;
      border: 0;
      line-height: 28px;
      z-index: 10;
      background: #fff !important;
      &:hover {
        color: #2589ff;
      }
    }
  }
  /deep/ .el-input__inner {
    padding-left: 10px;
    padding-right: 52px;
    &:focus {
      border-color: #2589ff !important;
    }
  }
  /deep/ .el-input__suffix {
    height: 28px !important;
    line-height: 28px !important;
    right: 32px !important;
  }
</style>
