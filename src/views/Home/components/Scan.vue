<template>
    <div class="weui-flex__item">
        <div class="scan" id="scanQRCode"><p><i class="iconfont"></i></p></div>
    </div>
</template>

<script>
export default {
    name: 'Scan',
}
</script>

<style lang="less">
.weui-flex__item {
    flex: 1;
    .scan {
        text-align: right;
        .iconfont {
            color: aliceblue;
            font-size: 1em;
        }
    }
}
</style>