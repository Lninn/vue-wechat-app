<template>
  <div>
    <div class="weui-cells__title">{{ name }}</div>
    <div class="weui-cells weui-cells_form fault-describe">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <textarea v-bind:placeholder="placeholder" rows="4"></textarea>
                <div class="weui-textarea-counter"><span>0</span>/200</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTextarea',
  props: {
      name: {
          type: String,
          required: true,
      },
      placeholder: {
          type: String,
          required: true,
      },
  },
}
</script>

<style lang="less" scoped>
textarea {
    display: block;
    border: 0;
    resize: none;
    width: 100%;
    color: inherit;
    font-size: 1em;
    line-height: inherit;
    outline: 0;
    // background-color: rgba(0, 0, 0, 0.5);
}
</style>
