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
                @remove-tag="removeTagAction"
                @clear="clearTagAction"
        @change="selectChanged">
            <el-option
                    class="tr-select-option"
                    v-for="item in displayData"
                    :key="item[keyAttri]"
                    :label="item[labelAttri]"
                    :value="item[valueAttri]"
                    :disabled="item[disabledAttri]">
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
        </el-select>
    </div>
</template>

<script>
export default {
  name: 'trSelect',
  props: {
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
    }
  },
  data () {
    return {
      selectVal: []
    }
  },
  computed: {
    displayData: function () {
      return JSON.parse(JSON.stringify(this.optionData))
    }
  },
  methods: {
    selectChanged: function () {
      // 如果是多选模式，由checkBox事件触发
      if (this.multiple) return
      this.$emit('on-change', this.selectVal)
    },
    checkedOption: function (item) {
      var checkedData = this.displayData.filter((data) => {
        return data.checked === true
      })
      this.selectVal = checkedData.map(data => {
        return data[this.valueAttri]
      })
      this.$emit('on-change', this.selectVal)
    },
    removeTagAction: function (data) {
      var removeTag = this.displayData.filter((item) => {
        return item[this.valueAttri] === data
      })[0]
      removeTag.checked = false
      this.$emit('on-removeTag', removeTag)
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
    }
    .tr-select-option {
        font-size: 12px !important;
        color: #595961 !important;
        &.selected {
            font-weight: bold;
            color: #303030 !important;
        }
    }
    /deep/ .el-input__inner {
        font-size: 12px;
        height: 30px;
        color: #595961;
    }
    /deep/ .el-input__icon {
        line-height: 30px;
    }
</style>
