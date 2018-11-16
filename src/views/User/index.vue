<template>
    <div class="page">
         <Header>
            <BackHeader name="我的" :showBtn="false" />
        </Header> 
        <Panel />
        <List />
        <Footer />
    </div>
</template>

<script>
import EquipmentList from '@/components/EquipmentList/index' 
import Footer from '@/components/Footer.vue' 
import BackHeader from '@/components/BackHeader'
import Header from '@/components/Header'
import List from '@/components/List/index'
import Panel from '@/components/Panel/index'
import PlainList from '@/components/PlainList/index'

export default {
    name: 'User',
    components: {
        Header, EquipmentList, Footer, BackHeader, List, Panel, PlainList
    },
}
</script>

<style lang="less" scoped>
</style>

