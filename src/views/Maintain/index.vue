<template>
    <Layout :hideFooter="true" title="设备报修">
        <EquipmentCell :ArrayData="equipment" style="margin-top: 3rem;" />
        <Connection />
        <InputTextarea :title="'故障描述'" :placeholder="'请输入故障描述'" />
        <UploadImg />
        <InputTextarea :title="'备注'" :placeholder="'请输入备注(可选)'" />
        <LargeButton text="提交" />
    </Layout>
</template>

<script>
import Layout from '@/views/Layout/index'
import Connection from './components/Connection'
import InputTextarea from '@/components/AppTextarea/InputTextarea'
import UploadImg from '@/components/UploadImg/index'
import LargeButton from '@/components/AppButton/LargeButton'
import EquipmentCell from '../WorkOrderInformation/components/EquipmentCell'

const equipment  = [
    { name: 'name', value: '身份证自助取证机', },
    { name: 'model', value: 'BY-788928783', },
    { name: 'position', value: '浙江省杭州市滨江区', },
    { name: 'company', value: 'XXX 有限公司', },
]

export default {
    name: 'Maintain',
    components: {
        Layout, Connection, InputTextarea, UploadImg, LargeButton, EquipmentCell,
    },
    data() {
        return {
            equipment,
        }
    },
}
</script>