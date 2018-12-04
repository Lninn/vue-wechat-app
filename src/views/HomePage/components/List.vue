<template>
    <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="javascript:;" @click="onProfile">
                    <div class="weui-cell__hd"><p><i class="iconfont">&#xe669;</i></p></div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p>个人资料</p>
                    </div>
                    <span class="weui-cell__ft"></span>
                </a>
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><p><i class="iconfont">&#xe655;</i></p></div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p @click="onActionSheet">设置</p>
                    </div>
                    <span class="weui-cell__ft"></span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import weui from 'weui.js'
import { mapActions, } from 'vuex'

export default {
    name: 'List',
    methods: {
        ...mapActions('user', [
            'logout',
        ]),
        onProfile() {
            this.$router.push('/user/profile')
        },
        onActionSheet() {
            const vm = this
            weui.actionSheet([
                {
                    label: '注销',
                    onClick: function () {
                        vm.logout()
                    },
                },
            ], [
            {
                label: '取消',
                onClick: function () {
                },
            }
            ], {
                className: 'custom-classname',
                onClose: function(){
                },
            })
        }
    },
}
</script>

<style lang="less" scoped>
.custom-classname {
    background-color: red;
}

p {
    padding-left: 5px;
}
</style>