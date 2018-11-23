<template>
    <div class="weui-flex__item">
        <div class="logo-info" data-id="UserInformation">
            <img class="avator" src="@/assets/touxiang.jpg" alt="">
            <span class="greet">{{ loginName }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Avator',
    props: {
        loginName: {
            type: String,
            default: '匿名',
        },
    },
}
</script>

<style lang="less">
.weui-flex__item {
    flex: 1;
    .logo-info {
        width: 100%;
        .avator {
            width: 1.5em;
            vertical-align: middle;
        }
        .greet {
            vertical-align: middle;
            margin-left: 10px;
        }
    }
}
</style>