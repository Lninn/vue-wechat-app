<template>
  <div>
    <div class="weui-cells__title">{{ title }}</div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__bd app-input-textarea">
                <textarea
                    :value="value"
                    v-bind="$attrs"
                    rows="4"
                    v-on="listeners"
                ></textarea>
                <div class="weui-textarea-counter"><span>{{ wordsCount }}</span>/200</div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="less">
.app-input-textarea {
    textarea {
        display: block;
        border: 0;
        resize: none;
        width: 100%;
        color: inherit;
        font-size: 1em;
        line-height: inherit;
        outline: 0;
    }
}
</style>

<script>
export default {
  name: 'AppInputTextarea',
  inheritAttrs: false,
  data() {
      return {
          value: null,
      }
  },
  computed: {
      wordsCount() {
          if (this.value) {
              return this.value.toString().length
          } else {
              return 0
          }
      },
      listeners() {
            return {
                ...this.$listeners,
                input: event => {
                    this.$emit('input', event.target.value)
                },
            }
        },
  },
  props: {
      title: {
          type: String,
          required: true,
      },
  },
}
</script>