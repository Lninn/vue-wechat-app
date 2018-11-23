<template>
    <div class="weui-panel weui-panel_access">
        <!-- <div class="weui-panel__hd"></div> -->
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" src="@/assets/touxiang.jpg" alt="">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{ user.name }}</h4>
                    <p class="weui-media-box__desc">上次登录时间: {{ (new Date(user.lastTime)).toLocaleDateString() }}</p>
                </div>
            </a>
        </div>
        <div class="weui-panel__ft"></div>
    </div>
</template>

<script>
export default {
    name: 'Panel',
     props: {
        user: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="less" scoped>
.weui-panel {
    margin-top: 3rem;
}
</style>