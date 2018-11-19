<template>
    <div class="weui-cells app-header">
        <slot>Defalut Header</slot>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="less">
.app-header {
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