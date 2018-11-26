<template>
    <Layout>
        <slot slot="header">
            <HeaderBack title="资料" />
        </slot>
        <Panel :user="user" />
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>登陆名称</p>
                </div>
                <div class="weui-cell__ft">{{ user.username }}</div>
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
                <div class="weui-cell__ft">{{ user.organize || '未绑定' }}</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>联系方式</p>
                </div>
                <div class="weui-cell__ft">{{ user.phone }}</div>
            </div>
        </div>
    </Layout>

    
</template>

<script>
import Layout from '@/views/Layout/index'
import Panel from './Panel'
import HeaderBack from '@/components/Header/HeaderBack'

import { createNamespacedHelpers, } from 'vuex'
const { mapState, } = createNamespacedHelpers('user')

export default {
    name: 'Profile',
    computed: {
        ...mapState([
            'user',
        ]),
    },
    components: {
        Layout, Panel, HeaderBack,
    },
}
</script>