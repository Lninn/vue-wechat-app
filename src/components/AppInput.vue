<template>
    <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">
                <i class="iconfont">{{ icon }}</i>
            </label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" :type="type" :placeholder="placeholder" />
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
    },
}
</script>

<style lang="less" scoped>
.iconfont {
    font-size: 1.2em;
    color: #67baff;
}
</style>