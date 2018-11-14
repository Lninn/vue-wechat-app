<template>
    <div class="page">
        <Header>
            <InputSelect />
        </Header>
        <WorkOrderList />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import InputSelect from '@/components/InputSelect'
import WorkOrderList from '@/components/WorkOrderList/index'
import Footer from '@/components/Footer'

export default {
    name: 'EquipmentRepair',
    components: {
        Header, InputSelect, WorkOrderList, Footer,
    },
}
</script>

<style lang="less">
    
</style>