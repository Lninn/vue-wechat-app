<template>
    <div class="weui-cell">
        <div class="weui-cell__bd">
            <p><i class="iconfont">{{ icon }}</i><span>{{ label }}</span></p>
        </div>
        <div class="weui-cell__ft">{{ value }}</div>
    </div>    
</template>

<script>
export default {
    name: 'Item',
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

<style lang="less" scoped>
.iconfont {
    font-size: 1.2em;
    color: #67baff;
}
span {
    margin-left: 5px;
}
</style>