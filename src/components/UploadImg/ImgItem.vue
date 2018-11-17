<template>
    <li
        class="weui-uploader__file"
        :style="styles"
        @click="onClick"
    >
    </li>
</template>

<script>

export default {
    name: 'ImgItem',
    props: {
        url: {
            type: String,
            required: true,
        },
    },
    computed: {
        styles() {
            return {
                backgroundImage: `url(${this.url})`,
            }
        },
    },
    methods: {
        onClick(url) {
            this.$emit('click', url)
        }
    }
}
</script>

<style lang="less">
</style>