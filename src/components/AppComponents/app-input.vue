<template>
    <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">
                <i class="iconfont">{{ icon }}</i>
            </label>
        </div>
        <div class="weui-cell__bd">
            <input
                class="weui-input"
                v-bind="$attrs"
                :value="value"
                v-on="listeners"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppInput',
    inheritAttrs: false,
    props: {
        icon: {
            type: String,
            required: true,
        },
        value: {
            required: false,
        },
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => {
                    this.$emit('input', event.target.value)
                },
            }
        },
    },
}
</script>