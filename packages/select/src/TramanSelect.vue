/**
*
*  Created by  JLee on 19/7/2
*/
<template>
    <div>
        <el-select
                v-model="selectVal"
                :placeholder="placeholder"
                :clearable="clearable"
                :multiple="multiple"
                :collapse-tags="multiple"
                :loading="loading"
                @remove-tag="removeTagAction"
                @clear="clearTagAction"
                @change="selectChanged">
            <el-input
                    v-if="searchable"
                    clearable
                    v-model="searchInput"
                    class="tr-select-search-input"
                    :placeholder="searchPlaceholder"
                    prefix-icon="el-icon-search"
            >
            </el-input>
            <el-option
                    class="tr-select-option"
                    v-for="item in displayData"
                    :key="item[keyAttri]"
                    :label="item[labelAttri]"
                    :value="item[valueAttri]"
                    :disabled="item[disabledAttri]"
                    v-show="!item.hiddened"
                    ref="selectOption">
                <div v-if="multiple" class="option-item">
                    <el-checkbox
                            class="option-item-checkbox"
                            v-model="item.checked"
                            :disabled="item[disabledAttri]"
                            @change="checkedOption(item)">
                        {{item[labelAttri]}}
                    </el-checkbox>
                </div>
            </el-option>
            <div v-if="createOptionable">
                <div class="tr-select-create" @mouseenter="mouseoverCreateOptionAction" v-show="!showCreateOptionInput" @click="createOptionInputShowed">
                    <i class="el-icon-plus"></i>
                    <span>创建新选项</span>
                </div>
                <el-input
                        ref="createOptionInputRef"
                        v-model="createOptionInput"
                        placeholder="请输入创建选项"
                        class="tr-select-create-input"
                        @blur="cancelCreateOption"
                        @change="commitCreateOption"
                        @keyup.enter.native="commitCreateOption"
                        v-show="showCreateOptionInput"
                        :disabled="loadingCreateOption">
                    <i class="el-icon-loading tr-create-option-input-suffix" slot="suffix" v-show="loadingCreateOption"></i>
                </el-input>
            </div>
        </el-select>
    </div>
</template>

<script>
export default {
  name: 'trSelect',
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    optionData: {
      type: Array,
      default: () => []
    },
    keyAttri: {
      type: String,
      default: 'value'
    },
    labelAttri: {
      type: String,
      default: 'label'
    },
    valueAttri: {
      type: String,
      default: 'value'
    },
    disabledAttri: {
      type: String,
      default: 'disabled'
    },
    searchable: {
      type: Boolean,
      default: false
    },
    searchPlaceholder: {
      type: String,
      default: '请输入搜索内容'
    },
    createOptionable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectVal: this.value,
      searchInput: '',
      cancelHoverClass: false,
      createOptionInput: '',
      showCreateOptionInput: false,
      loadingCreateOption: false
    }
  },
  computed: {
    displayData: function () {
      // eslint-disable-next-line
      this.loadingCreateOption = false
      // eslint-disable-next-line
      this.showCreateOptionInput = false
      var data = JSON.parse(JSON.stringify(this.optionData))
      if (this.multiple) {
        var selData = data.filter(item => {
          return this.value.indexOf(item[this.valueAttri]) >= 0
        })
        selData.forEach(item => {
          item.checked = true
        })
      }
      return data
    }
  },
  methods: {
    selectChanged: function () {
      // 如果是多选模式，由checkBox事件触发
      if (this.multiple) return
      this.$emit('on-change', this.selectVal)
      this.$emit('input', this.selectVal)
    },
    checkedOption: function (item) {
      var checkedData = this.displayData.filter((data) => {
        return data.checked === true
      })
      this.selectVal = checkedData.map(data => {
        return data[this.valueAttri]
      })
      this.$emit('on-change', this.selectVal)
      this.$emit('input', this.selectVal)
    },
    removeTagAction: function (data) {
      var removeTag = this.displayData.filter((item) => {
        return item[this.valueAttri] === data
      })[0]
      removeTag.checked = false
      this.$emit('on-remove-tag', removeTag)
      this.checkedOption(removeTag)
    },
    clearTagAction: function () {
      this.$emit('on-clear')
      // 非多选模式下，数据通知事件由selectChanged发出
      if (!this.multiple) return
      this.displayData.forEach((item) => {
        item.checked = false
      })
      this.selectVal = []
      this.$emit('on-change', this.selectVal)
      this.$emit('input', this.selectVal)
    },
    mouseoverCreateOptionAction: function () {
      var selectOptionEl = document.getElementsByClassName('tr-select-option')
      for (var index = 0; index < selectOptionEl.length; index++) {
        selectOptionEl[index].classList.remove('hover')
      }
    },
    createOptionInputShowed: function () {
      this.showCreateOptionInput = true
      setTimeout(() => {
        this.$refs.createOptionInputRef.focus()
      })
    },
    commitCreateOption: function () {
      if (this.createOptionInput && this.createOptionInput.trim().length > 0) {
        this.loadingCreateOption = true
        this.$emit('on-create-option', this.createOptionInput)
      }
    },
    cancelCreateOption: function () {
      if (!this.createOptionInput || this.createOptionInput.trim().length === 0) {
        this.loadingCreateOption = false
        this.showCreateOptionInput = false
      }
    }
  },
  watch: {
    searchInput: function (newVal, oldVal) {
      this.displayData.forEach(item => {
        item.hiddened = item[this.labelAttri].indexOf(newVal) < 0
      })
    },
    value (newVal) {
      this.selectVal = newVal
    }
  }
}
</script>

<style scoped lang="scss">
    .option-item {
        width: 100%;
    }
    .option-item-checkbox {
        width: 100%;
        font-size: 12px !important;
    }
    .tr-select-option {
        font-size: 12px !important;
        padding: 0 10px !important;
        color: #595961 !important;
        &.selected {
            font-weight: bold;
            color: #303030 !important;
        }
    }
    .tr-select-option-no-hover {
        background-color: white !important;
    }
    .tr-select-create {
        font-size: 12px;
        color: #2589FF;
        height: 34px;
        line-height: 34px;
        padding: 0px 10px;
        cursor: pointer;
        i {
            margin-right: 5px;
        }
        &:hover {
            background-color: #F5F7FA;
        }
    }
    .tr-create-option-input-suffix{
        line-height: 30px;
    }
    /deep/ .el-checkbox__input+.el-checkbox__label {
        color: #595961;
        font-size: 12px;
    }
    /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
        color: #303030;
        font-weight: bold;
    }
    /deep/ .el-input__inner {
        font-size: 12px;
        height: 30px;
        color: #595961;
    }
    /deep/ .el-input__icon {
        line-height: 30px;
    }
  /deep/ .el-select{
    width: 100%;
  }
</style>
<style lang="scss">
    .tr-select-search-input .el-input__inner, .tr-select-create-input .el-input__inner{
        border: none;
    }
    .tr-select-create-input .el-input__inner {
        background-color: #F5F7FA;
    }
</style>
