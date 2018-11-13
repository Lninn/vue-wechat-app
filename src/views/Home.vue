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
import Header from '../components/Header.vue'
import Avator from './Home/Avator.vue'
import Scan from './Home/Scan.vue'
import EquipmentList from '../components/EquipmentList.vue' 
import Footer from '../components/Footer.vue' 

export default {
    components: {
        Header, Avator, Scan, EquipmentList, Footer
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

