<template>
  <div>
    <div class="weui-cells__title">{{ data.name }}</div>
    <div class="weui-cells">
        <Item
            v-for="item in data.list"
            :key="item.name"
            :label="item.label"
            :icon="item.icon"
            :value="item.value"
        />
    </div>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'Information',
  props: {
      data: {
          type: Object,
          required: true,
      },
  },
  components: {
      Item,
  },
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

</style>
