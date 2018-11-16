<template>
    <div class="app-button">
        <a href="javascript:;" class="weui-btn weui-btn_plain-default">{{ text }}</a>
    </div>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        text: {
            type: String,
            default: 'CLICK',        
        },
    }
}
</script>

<style lang="less">
    .app-button {
        padding: 10px 15px;
    }
</style>