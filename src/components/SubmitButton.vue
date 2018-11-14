<template>
    <div class="btn-container">
        <a href="javascript:;" class="weui-btn weui-btn_primary">{{ name }}</a>
    </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
      name: {
          type: String,
          required: true,
      },
  },
}
</script>

<style lang="less" scoped>
.btn-container {
    padding: 10px 15px;
}
</style>
