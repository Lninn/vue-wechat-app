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
                :type="type"
                :value="value"
                :placeholder="placeholder"
                @input="$emit('input', $event.target.value)"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppInput',
    props: {
        icon: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
        },
        value: {
            required: false,
        },
    },
}
</script>