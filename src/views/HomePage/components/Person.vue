<template>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>登陆名称</p>
            </div>
            <div class="weui-cell__ft">{{ user.name }}</div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>用户地址</p>
            </div>
            <div class="weui-cell__ft">{{ user.address }}</div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>属于公司</p>
            </div>
            <div class="weui-cell__ft">{{ user.organize }}</div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <p>联系方式</p>
            </div>
            <div class="weui-cell__ft">{{ user.phone }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Person',
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
}
</script>