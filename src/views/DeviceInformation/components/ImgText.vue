<template>
    <ul id="graphic" class="graphic">
        <div class="swiper-slide graphic-item">
            <template v-for="image in imageList">
                <img :src="image.path" :id="image.id" :key="image.id" />
            </template>
        </div>
    </ul>
</template>

<script>
export default {
    name: 'ImgText',
    props: {
        imageList: {
            type: Array,
            required: true,
        },
    },
    components: {
        // Item: {
        //     props: {
        //         image: {
        //             type: Object,
        //             required: true,
        //         },
        //     },
        //     template: `<img :id="image.id" :src="image.path" />`,
        // },
    },
}
</script>

<style lang="less">
.graphic {
    display: block;
    height: 100%;
    .graphic-item img {
        width: 100%;
    }
}

.wx-bottom {
    position: fixed !important;
}
</style>