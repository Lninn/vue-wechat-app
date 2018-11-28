<template>
<div class="weui-panel weui-panel_access" style="margin-top: 3rem;">

    <div class="weui-panel__bd">
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <template v-for="image in imageList">
                    <div class="swiper-slide swiper-items" :key="image.id">
                        <img :id="image.id" :src="image.path" />
                    </div>
                </template>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev hide-arrow" tabindex="0" role="button" aria-label="Previous slide"></div>
            <div class="swiper-button-next hide-arrow" tabindex="0" role="button" aria-label="Next slide"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
    </div>
</div>
</template>

<style lang="less">
.swiper-container {
    width: 290px;
    height: 300px;
}

.swiper-items img {
    width: 100%;
}
</style>

<script>
import Swiper from 'swiper'

export default {
    name: 'AppSwiper',
    props: {
        imageList: {
            type: Array,
            required: true,
        },
    },
    updated: function() {
        new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
</script>