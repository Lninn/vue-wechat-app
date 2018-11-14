<template>
    <div class="weui-flex__item">
        <div class="logo-info" data-id="UserInformation">
            <img class="avator" src="@/assets/touxiang.jpg" alt="">
            <span class="greet">Michael</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Avator',
}
</script>

<style lang="less">
.weui-flex__item {
    flex: 1;
    .logo-info {
        width: 100%;
        .avator {
            width: 20%;
            vertical-align: middle;
        }
        .greet {
            vertical-align: middle;
            margin-left: 10px;
        }
    }
}
</style>