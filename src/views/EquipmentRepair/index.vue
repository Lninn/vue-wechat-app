<template>
    <div class="page">
        <Header>
            <BackHeader name="设备报修" />
        </Header>
        <BasicInformation :ArrayData="basicInformation" />
        <Connection />
        <InputTextarea :name="'故障描述'" :placeholder="'请输入故障描述'" />
        <UploadImg />
        <InputTextarea :name="'备注'" :placeholder="'请输入备注(可选)'" />
        <SubmitButton :name="'提交'" />
    </div>
</template>

<script>
import Header from '@/components/Header'
import BackHeader from '@/components/BackHeader'
import BasicInformation from '@/components/BasicInformation/index'
import Connection from './components/Connection'
import InputTextarea from '@/components/InputTextarea'
import UploadImg from '@/components/UploadImg/index'
import SubmitButton from '@/components/SubmitButton'

const basicInformation = [
    { name: 'company', value: '管理局', },
    { name: 'address', value: '浙江省杭州市余杭区', },
    { name: 'equipment', value: '身份证自助取证机', },
    { name: 'model', value: 'BY-EDHWEY72323', },
]

export default {
    name: 'EquipmentRepair',
    components: {
        Header, BackHeader, BasicInformation, Connection, InputTextarea, UploadImg, SubmitButton,
    },
    data() {
        return {
            basicInformation,
        }
    },
}
</script>

<style lang="less">
    
</style>