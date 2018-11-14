<template>
    <div class="page">
        <Header>
            <BackHeader name="设备报修" />
        </Header>
        <BasicInformation />
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
import UploadImg from '@/components/UploadImg'
import SubmitButton from '@/components/SubmitButton'

export default {
    name: 'EquipmentRepair',
    components: {
        Header, BackHeader, BasicInformation, Connection, InputTextarea, UploadImg, SubmitButton,
    },
}
</script>

<style lang="less">
    
</style>