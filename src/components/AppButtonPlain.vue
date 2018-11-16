<template>
    <div class="app-button-plain">
        <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">{{ text }}</a>
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
.app-button-plain {
    display: inline-block;
    a {
        background-color: transparent;
        border: none;
        &:after {
            content: none;
        }
    }
}
</style>