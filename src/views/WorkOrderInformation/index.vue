<template>
    <Layout :hideFooter="true" title="工单详情">
        <WorkOrderCell :ArrayData="workOrder" />
        <EquipmentCell :ArrayData="equipment" />
        <ConnectCell :ArrayData="connect" />
        <MaintainCell />
        <FeedbackCell />
        <EvaluateCell />
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'

import WorkOrderCell from './components/WorkOrderCell'
import EquipmentCell from './components/EquipmentCell'
import ConnectCell from './components/ConnectCell'
import MaintainCell from './components/MaintainCell'
import FeedbackCell from './components/FeedbackCell'
import EvaluateCell from './components/EvaluateCell'
import { fetchWorkOrder } from '@/api/workorder'

const workOrder = [
    { name: 'number', value: 'BGD-SDABYHH1', },
    { name: 'date', value: '2015-10-14', },
]

const equipment  = [
    { name: 'name', value: '身份证自助取证机', },
    { name: 'model', value: 'BY-788928783', },
    { name: 'position', value: '浙江省杭州市滨江区', },
    { name: 'company', value: 'XXX 有限公司', },
]

const connect = [
    { name: 'person', value: '毕淑敏', },
    { name: 'phone', value: '14754744414', },
]

export default {
    name: 'WorkOrderInformation',
    components: {
        Layout, WorkOrderCell, EquipmentCell, ConnectCell, MaintainCell, FeedbackCell, EvaluateCell,
    },
    data() {
        return {
            workOrder,
            equipment,
            connect,
        }
    },
    created() {
        const id = this.$route.params && this.$route.params.id
        this.$store.dispatch('getWorkOrder', id)
    },
}
</script>