<template>
    <Layout :hideFooter="true" title="工单详情">
        <WorkOrderCell
            :ArrayData="information"
        />
        <EquipmentCell
            :ArrayData="device"
        />
        <ConnectCell
            :ArrayData="connection"
        />
        <MaintainCell
            title="故障描述"
            :text="descibe"
            :imageList="descibeImage"
        />
        <FeedbackCell
            title="反馈内容"
            :text="feedback"
            :imageList="feedbackImage"
        />
        <EvaluateCell
            title="评价"
            :text="evaluate"
        />
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

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('workOrder')

export default {
    name: 'WorkOrderInformation',
    components: {
        Layout, WorkOrderCell, EquipmentCell, ConnectCell, MaintainCell, FeedbackCell, EvaluateCell,
    },
    computed: {
        ...mapGetters([
            'information',
            'device',
            'connection',
            'descibe',
            'feedback',
            'evaluate',
            'descibeImage',
            'feedbackImage',
        ]),
    },
    created() {
        const id = this.$route.params && this.$route.params.id
        this.getWorkOrder(id)
    },
    methods: {
        ...mapActions([
            'getWorkOrder',
        ]),
    },
}
</script>