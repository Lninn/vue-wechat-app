<template>
  <div>
    <div class="weui-cells__title">联系信息</div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd">
                <label class="weui-label">
                    <p><i class="iconfont"></i></p>
                </label>
            </div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" v-model="name" @blur="onVaild" maxlength="10" placeholder="请输入联系人">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd">
                <label class="weui-label">
                    <p><i class="iconfont"></i></p>
                </label>
            </div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="number" v-model="phone" @blur="onVaild" maxlength="11" pattern="[0-9]*" placeholder="请输入联系方式">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import weui from 'weui.js'

export default {
  name: 'Connection',
  data() {
      return {
          name: null,
          phone: null,
      }
  },
  methods: {
      onVaild() {
          if (!this.name) {
            weui.topTips('请输入联系人', {
                duration: 1500,
            })
          } else if (!this.phone) {
            weui.topTips('请输入正确的联系方式', {
                duration: 1500,
            })
          } else if (this.phone && this.phone.toString().length !== 11) {
            weui.topTips('请输入正确的联系方式', {
                duration: 1500,
            })
          } else if (this.name && this.phone) {
              this.$emit('onConnect', {
                  name: this.name,
                  phone: this.phone,
              })
          }
      }
  }
}
</script>

<style lang="less" scoped>
.weui-cells__title {
    margin-top: .77em;
    margin-bottom: .3em;
    padding-left: 15px;
    padding-right: 15px;
    color: #999;
    font-size: 14px;
}

input {
    text-align: right;
}

.iconfont {
    font-size: 1.2em;
    color: #67baff;
}
</style>
