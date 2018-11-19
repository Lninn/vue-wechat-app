<template>
    <Layout>
        <div slot="header" class="weui-flex">
            <Avator />
            <Scan />
        </div>
        <EquipmentList />
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import Avator from './components/Avator.vue'
import Scan from './components/Scan.vue'
import EquipmentList from '../DeviceList/index' 

export default {
    name: 'Home',
    components: {
        Avator, Scan, EquipmentList, Layout,
    },
}
</script>

<style lang="less">
.weui-flex {
    display: flex;
    padding: 10px 15px;
    align-items: center;
}
</style>

