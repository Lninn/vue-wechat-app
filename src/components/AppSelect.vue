<template>
    <div class="weui-cell">
        <div class="weui-cell__hd">
        </div>
        <div class="weui-cell__bd">
            <div class="weui-cells select">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select class="weui-select" :value="currentState" @input="onInput">
                            <option selected="" value="ALL">工单列表</option>
                            <option value="WAITING">等待处理</option>
                            <option value="PROCESSING">正在处理</option>
                            <option value="COMPLETED">处理完成</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppSelect',
    props: {
        currentState: {
            type: String,
            required: true,
            default: 'ALL',
        },
    },
    methods: {
        onInput($event) {
            this.$emit('changeState', $event.target.value)
        },
    },
}
</script>

<style lang="less" scoped>
.weui-cell__bd {
    margin-top: 0;
    background-color: #67baff;
    select {
        color: #fff;
        font-size: 1em;
        background-color: #67baff;
        height: 1.5rem;
        line-height: 1.5em;
        padding-left: 30%;
    }
    .select {
        margin-top: 0;
        &::after{
            content: none;
        }
        &::before {
            content: none;
        }
    }
}

.weui-cell_select .weui-cell__bd::after {
    border-color: #fff;
    z-index: 100;
    right: 30%;
}
</style>