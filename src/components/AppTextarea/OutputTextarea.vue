<template>
    <div>
        <div class="weui-cells__title">{{ title }}</div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd app-output-textarea">
                    <p>{{ text }}</p>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'OutputTextarea',
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="less">
.app-output-textarea {
    p {
        letter-spacing: 1px;
        line-height: 1.5em;
        text-indent: 2em;
        font-size: .9em;
        color: rgba(0, 0, 0, 0.8);
        height: 5em;
        overflow-y: scroll;
    }
}
</style>