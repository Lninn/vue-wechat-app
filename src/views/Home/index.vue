<template>
    <div class="page">
         <Header>
            <div class="weui-flex">
                <Avator />
                <Scan />
            </div>
        </Header> 
        <EquipmentList />   
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Avator from './components/Avator.vue'
import Scan from './components/Scan.vue'
import EquipmentList from '@/components/EquipmentList/index' 
import Footer from '@/components/Footer.vue' 

export default {
    name: 'Home',
    components: {
        Header, Avator, Scan, EquipmentList, Footer,
    },
}
</script>

<style lang="less" scoped>
.weui-flex {
    display: flex;
    padding: 10px 15px;
    align-items: center;
}
</style>

