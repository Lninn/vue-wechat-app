<template>
    <div class="page">
        <Header>
            <BackHeader name="工单详情" />
        </Header>
        <BasicInformation :ArrayData="basicInformation" />
        <DetailInformation :ArrayData="detailInformation"  />
        <PrintTextarea name="故障描述" text="请输入故障描述请输入故障描述请输入故障描述请输入故障描述请输入故障描述" />
        <UploadImg />
        <PrintTextarea name="客户评价" text="客户评价客户评价客户评价客户评价客户评价客户评价客户评价客户评价" />
        <PrintTextarea name="所需工具" text="所需工具所需工具所需工具所需工具所需工具所需工具所需工具所需工具所需工具" />
        <PrintTextarea name="备注" text="备注备注备注备注备注备注备注备注备注备注备注备注" />
    </div>
</template>

<script>
import Header from '@/components/Header'
import BackHeader from '@/components/BackHeader'
import BasicInformation from '@/components/BasicInformation/index'
import DetailInformation from '@/components/DetailInformation/index'
import PrintTextarea from '@/components/PrintTextarea/index'
import UploadImg from '@/components/UploadImg'

const basicInformation = [
    { name: 'company', value: '管理局', },
    { name: 'address', value: '浙江省杭州市余杭区', },
    { name: 'equipment', value: '身份证自助取证机', },
    { name: 'model', value: 'BY-EDHWEY72323', },
]

const detailInformation = [
    { name: 'person', value: '毕淑敏', },
    { name: 'phone', value: '15240114411', },
    { name: 'date', value: '2010-10-21', },
    { name: 'number', value: 'BY-EDHWEY72323', },
]

export default {
    name: 'EquipmentRepair',
    components: {
        Header, BackHeader, DetailInformation, BasicInformation, PrintTextarea, UploadImg,
    },
    data() {
        return {
            basicInformation: basicInformation,
            detailInformation: detailInformation,
        }
    },
}
</script>

<style lang="less">
    
</style>