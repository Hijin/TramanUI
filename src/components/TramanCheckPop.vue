/**
*
*  Created by  JLee on 19/6/18
*  @props  title  按钮显示文字，默认"自定义"
*  @props  data  操作数据，默认[]
*  @props  width  选择框宽度，默认500px
*  @props  column  选择框一行展示列数，默认4列
*  @props  saveKey  操作结果存储字段，默认''，此时不存储
*/
<template>
    <el-popover
            v-model="popShow"
            placement="bottom-start"
            :width="width"
            @hide="popHide"
            trigger="click"
    >
        <el-button slot="reference" plain>{{title}}</el-button>
        <el-checkbox-group v-model="checkedVal" class="tr-check">
            <!--数据带分组-->
            <div v-if="dataModel">
                <div class="tr-group-check" v-for="(groupItem,index) in displayData" v-bind:key="index">
                    <div class="tr-group-check-title" v-if="groupItem.title && groupItem.title.length > 0">{{groupItem.title}}</div>
                    <el-checkbox
                            class="tr-group-check-item"
                            v-for="item in groupItem.propsData"
                            :disabled="item.disabled"
                            :style="{width: columnWidth}"
                            :label="item.key"
                            :key="item.key"
                    >{{item.label}}</el-checkbox>
                </div>
            </div>
            <!--数据不带分组，只是普通数组-->
            <div v-if="!dataModel">
                <el-checkbox
                        class="tr-group-check-item"
                        v-for="item in displayData"
                        :disabled="item.disabled"
                        :style="{width: columnWidth}"
                        :label="item.key"
                        :key="item.key"
                >{{item.label}}</el-checkbox>
            </div>
        </el-checkbox-group>
        <div class="tr-check-pop-bottom">
            <el-button size="mini" @click="popShow = false">取消</el-button>
            <el-button type="primary" @click="confirm" size="mini">确定</el-button>
        </div>
    </el-popover>
</template>

<script>
export default {
  name: 'TramanCheckPop',
  props: {
    title: {
      type: String,
      default: '自定义'
    },
    data: {
      type: Array,
      default: () => { return [] }
    },
    width: {
      type: Number,
      default: 500
    },
    column: {
      type: Number,
      default: 4,
      // 列数 > 0
      validator: function (value) {
        return value > 0
      }
    },
    saveKey: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      popShow: false,
      checkedVal: []
    }
  },
  computed: {
    columnWidth: function () {
      return this.width / this.column + 'px'
    },
    displayData: function () {
      return JSON.parse(JSON.stringify(this.data))
    },
    // 数据模式带不带分组
    dataModel: function () {
      return this.data && this.data.length > 0 && this.data[0].hasOwnProperty('propsData')
    }
  },
  methods: {
    popHide: function (notInitCheckedVal) {
      this.popShow = false
      if (!notInitCheckedVal) {
        this.initCheckedVal()
      }
    },
    confirm: function () {
      if (this.dataModel) {
        this.displayData.forEach((groupItem) => {
          groupItem.propsData.forEach(item => {
            item.checked = this.checkedVal.indexOf(item.key) >= 0
          })
        })
      } else {
        this.displayData.forEach((item) => {
          item.checked = this.checkedVal.indexOf(item.key) >= 0
        })
      }

      this.$emit('on-confirm', this.displayData)
      this.popHide(true)
      if (this.saveKey && this.saveKey.length > 0) {
        localStorage.setItem(this.saveKey, JSON.stringify(this.displayData))
      }
    },
    initCheckedVal: function () {
      this.checkedVal = []
      if (this.dataModel) {
        this.displayData.forEach((groupItem) => {
          groupItem.propsData.forEach(item => {
            if (item.checked) {
              this.checkedVal.push(item.key)
            }
          })
        })
      } else {
        this.displayData.forEach((item) => {
          if (item.checked) {
            this.checkedVal.push(item.key)
          }
        })
      }
    }
  },
  watch: {
    data: function (newVal, oldVal) {
      this.initCheckedVal()
    }
  }
}
</script>

<style scoped lang="scss">
    .tr-check {
        max-height: 250px;
        overflow: auto;
    }
    .tr-group-check:first-child {
        margin-top: -10px;
    }
    .tr-group-check-title {
        color: #595961;
        font-weight: bold;
        font-size: 12px;
        margin-top: 20px;
    }
    .tr-group-check-item {
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 0px;
    }
    .tr-check-pop-bottom {
        text-align: right;
        padding-top: 10px;
    }
    /deep/ .el-checkbox__label {
        font-size: 12px;
        color: #595961;
        font-weight: normal;
    }
</style>
