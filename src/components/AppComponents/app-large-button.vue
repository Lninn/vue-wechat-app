<template>
    <div class="app-button">
        <a
            href="javascript:;"
            class="weui-btn weui-btn_primary"
            @click="onClick"
        >{{ text }}</a>
    </div>
</template>

<style lang="less">
.app-button {
    padding: 10px 15px;
}
</style>

<script>
export default {
    name: 'AppLargeButton',
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

