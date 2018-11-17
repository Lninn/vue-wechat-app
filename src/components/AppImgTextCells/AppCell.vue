<template>
    <div class="weui-cell">
        <div class="weui-cell__hd">
            <i class="iconfont">{{ icon }}</i>
        </div>
        <div class="weui-cell__bd">
            <span>{{ label }}</span>
        </div>
        <div class="weui-cell__ft">
            {{ value }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCell',
    props: {
        label: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
}
</script>