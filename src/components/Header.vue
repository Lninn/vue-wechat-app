<template>
    <div class="weui-cells">
        <slot>Defalut Content</slot>
    </div>
</template>

<style lang="less" scoped>
.weui-cells {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    margin-top: 0;
    overflow: hidden;
    z-index: 999;
    color: #fff;
    background-color: #67baff;
}
</style>