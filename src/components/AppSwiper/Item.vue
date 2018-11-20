<template>
    <div class="swiper-slide swiper-items">
        <img :id="image.id" :src="image.path" />
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: {
        image: {
            type: Object,
            required: true,
        },
    },
}
</script>