<template>
    <div class="weui-tabbar wx-bottom">
        <router-link v-if="userType === 3" to="/" class="weui-tabbar__item" exact>
            <img src="@/assets/icon_tabbar.png" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">主页</p>
        </router-link>
        <router-link to="/workOrder" class="weui-tabbar__item">
            <img src="@/assets/icon_tabbar.png" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">工单</p>
        </router-link>
        <router-link to="/user" class="weui-tabbar__item">
            <span style="display: inline-block;position: relative;">
                <img src="@/assets/icon_tabbar.png" class="weui-tabbar__icon">
            </span>
            <p class="weui-tabbar__label">我的</p>
        </router-link>
    </div>
</template>

<style lang="less">
.wx-bottom {
    position: fixed !important;
}

.router-link-active .weui-tabbar__label {
    color: #09bb07;
}
</style>

<script>
import { mapGetters, } from 'vuex'

export default {
    name: 'AppFooter',
    computed: {
        ...mapGetters('user', [
            'userType',
        ])
    }
}
</script>