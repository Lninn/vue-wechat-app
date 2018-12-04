<template>
    <Layout :hideFooter="true" title="设备报修">
        <EquipmentCell
            :ArrayData="equipmentData"
            style="margin-top: 3rem;"
        />
        <Connection
            @onConnect="SET_FORMDATA_CONNECT"
        />
        <AppInputTextarea
            title="故障描述"
            placeholder="请输入故障描述"
            @input="SET_FORMDATA_DETAIL"
        />
        <UploadImg
            @upload="SET_FORMDATA_FILES"
        />
        <AppInputTextarea
            title="备注"
            placeholder="请输入备注(可选)"
            @input="SET_FORMDATA_REMARK"
        />
        <AppLargeButton
            text="提交"
            @onClick="submitForm"
        />
    </Layout>
</template>

<script>
import weui from 'weui.js'
import Layout from '@/views/Layout/index'
import Connection from './components/Connection'
import UploadImg from '@/components/UploadImg/index'
import EquipmentCell from '../WorkOrderInformation/components/EquipmentCell'

import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapMutations, mapActions, } = createNamespacedHelpers('devices')

let equipment  = [
    { name: 'name', value: '身份证自助取证机', },
    { name: 'model', value: 'BY-788928783', },
    { name: 'address', value: '浙江省杭州市滨江区', },
    { name: 'company', value: 'XXX 有限公司', },
]

export default {
    name: 'Maintain',
    components: {
        Layout, Connection, UploadImg, EquipmentCell,
    },
    computed: {
        ...mapGetters([
            'validForm',
            'getItemById'
        ]),
        equipmentData() {
            const id = this.$route.params && this.$route.params.id
            const data = this.getItemById(id)
            equipment = equipment.map(item => {
                item.value = data[item.name]
                return item
            })
           
            return equipment
        }
    },
    methods: {
        submitForm(){
            if (!this.validForm) {
                return
            }
            
            this.submit().then(() => {
                weui.toast('提交成功', 1500)
                this.$router.push('/')
            })
        },
        ...mapMutations([
            'SET_FORMDATA_CONNECT',
            'SET_FORMDATA_DETAIL',
            'SET_FORMDATA_REMARK',
            'SET_FORMDATA_FILES',
        ]),
        ...mapActions([
            'submit',
        ]),
    },
}
</script>