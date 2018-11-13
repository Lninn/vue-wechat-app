<template>
<div class="weui-panel weui-panel_access">

    <div class="weui-panel__bd">
        <!-- Slider main container -->
        <div class="swiper-container swiper-container-horizontal swiper-container-ios">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper" style="transform: translate3d(-580px, 0px, 0px); transition-duration: 0ms;">
                <div class="swiper-slide swiper-items swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 290px;"><img data-id="7fbc4b6e-4d19-4a27-9b92-d153d5582526" src="http://back.auto888.com.cn/upload/titleimg/9aea47db-46c8-4.png"></div>
                <div class="swiper-slide swiper-items swiper-slide-duplicate-active swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="0" style="width: 290px;"><img data-id="7fbc4b6e-4d19-4a27-9b92-d153d5582526" src="http://back.auto888.com.cn/upload/titleimg/9aea47db-46c8-4.png"></div>
                <div class="swiper-slide swiper-items swiper-slide-duplicate swiper-slide-active swiper-slide-duplicate-prev" data-swiper-slide-index="0" style="width: 290px;"><img data-id="7fbc4b6e-4d19-4a27-9b92-d153d5582526" src="http://back.auto888.com.cn/upload/titleimg/9aea47db-46c8-4.png"></div>
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

<script>
import Swiper from 'swiper'

export default {
    mounted: function() {
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
<style lang="less" scoped>
.weui-panel {
    margin-top: 3rem;
}
.swiper-container {
    width: 290px;
    height: 300px;
}   
.swiper-items img {
    width: 100%;
}

.wx-bottom {
    position: fixed;
}

.hide-arrow {
    visibility: auto;
}
</style>