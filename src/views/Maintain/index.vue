<template>
    <Layout :hideFooter="true" title="设备报修">
        <EquipmentCell :ArrayData="equipmentData" style="margin-top: 3rem;" />
        <Connection @onConnect="connect" />
        <InputTextarea title="故障描述" placeholder="请输入故障描述" @input="onDetail" />
        <UploadImg @upload="onUpload" />
        <InputTextarea title="备注" placeholder="请输入备注(可选)" @input="onRemark" />
        <LargeButton text="提交" @onClick="submit" />
    </Layout>
</template>

<script>
import weui from 'weui.js'
import Layout from '@/views/Layout/index'
import Connection from './components/Connection'
import InputTextarea from '@/components/AppTextarea/InputTextarea'
import UploadImg from '@/components/UploadImg/index'
import LargeButton from '@/components/AppButton/LargeButton'
import EquipmentCell from '../WorkOrderInformation/components/EquipmentCell'
import { mapGetters } from 'vuex'
import { maintainDevice } from '@/api/devices'

let equipment  = [
    { name: 'name', value: '身份证自助取证机', },
    { name: 'model', value: 'BY-788928783', },
    { name: 'address', value: '浙江省杭州市滨江区', },
    { name: 'company', value: 'XXX 有限公司', },
]

export default {
    name: 'Maintain',
    components: {
        Layout, Connection, InputTextarea, UploadImg, LargeButton, EquipmentCell,
    },
    data() {
        return {
            formData: {
                connection: null,
                detail: null,
                remark: null,
                files: null,
            },
        }
    },
    computed: {
        ...mapGetters('devices', [
            'getItemById',
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
        submit(){
            if (!this.validForm()) {
                return
            }

            maintainDevice(this.getPostData()).then(response => {
                const data = response.data
                const { errmsg, code, } = data
                if (code === 2000) {
                    weui.toast('提交成功', 1500)
                    this.$router.push('/')
                }
            })
        },
        connect(data) {
            this.formData.connection = data
        },
        onDetail(value) {
            this.formData.detail = value
        },
        onRemark(value) {
            this.formData.remark = value
        },
        onUpload(value) {
            this.formData.files = value
        },
        validForm() {
            if (!this.formData.connection) {
                weui.topTips('请输入联系方式', {
                    duration: 1500,
                })
                return false
            } else if (!this.formData.detail) {
                weui.topTips('请输入故障描述', {
                    duration: 1500,
                })
                return false
            }

            return true
        },
        getPostData() {
            const data = new FormData()
            const { connection, detail, remark, files } = this.formData

            data.append('name', connection.name)
            data.append('phone', connection.phone)
            data.append('descibe', detail)
            data.append('remark', remark)
            for (let index = 0, len = files.length; index < len; index++) {
               data.append('file-image' + index, files)
            }

            return data
        },
    },
}
</script>