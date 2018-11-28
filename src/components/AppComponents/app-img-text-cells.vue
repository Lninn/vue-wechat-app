<template>
  <div>
    <div class="weui-cells__title">{{ data.name }}</div>
    <div class="weui-cells">
        <AppCell
            v-for="item in data.list"
            :key="item.name"
            :label="item.label"
            :icon="item.icon"
            :value="item.value"
        />
    </div>
  </div>
</template>

<style lang="less">
.weui-cells__title {
    margin-top: .77em;
    margin-bottom: .3em;
    padding-left: 15px;
    padding-right: 15px;
    color: #999;
    font-size: 14px;
}
</style>

<script>
import AppCell from './app-cell'

export default {
  name: 'AppImgTextCells',
  props: {
      data: {
          type: Object,
          required: true,
      },
  },
  components: {
      AppCell,
  },
}
</script>