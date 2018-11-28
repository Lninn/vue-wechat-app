<template>
    <div class="app-button-plain">
        <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default" @click="onClick">{{ text }}</a>
    </div>
</template>

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

<script>
export default {
    name: 'AppSmallButton',
    props: {
        text: {
            type: String,
            default: 'CLICK',        
        },
    },
    methods: {
        onClick() {
            this.$emit('onClick')
        },
    },
}
</script>