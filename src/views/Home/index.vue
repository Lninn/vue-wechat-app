<template>
    <Layout>
        <div slot="header" class="weui-flex">
            <Avator :loginName="loginName" />
            <Scan />
        </div>
        <DeviceList />
    </Layout>
</template>

<style lang="less">
.weui-flex {
    display: flex;
    padding: 10px 15px;
    align-items: center;
}
</style>

<script>
import Layout from '@/views/Layout/index'
import Avator from './components/Avator.vue'
import Scan from './components/Scan.vue'
import DeviceList from '../DeviceList/index' 

import { createNamespacedHelpers } from 'vuex'
const { mapGetters, } = createNamespacedHelpers('user')

export default {
    name: 'Home',
    components: {
        Avator, Scan, DeviceList, Layout,
    },
    computed: {
        ...mapGetters([
            'loginName',
        ]),
    },
}
</script>