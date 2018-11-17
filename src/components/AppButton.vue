<template>
    <div class="app-button">
        <a
            href="javascript:;"
            class="weui-btn weui-btn_plain-default"
            @click="onClick"
        >{{ text }}</a>
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
    },
    methods: {
        onClick() {
            this.$emit('onClick')
        }
    }
}
</script>

<style lang="less">
    .app-button {
        padding: 10px 15px;
    }
</style>