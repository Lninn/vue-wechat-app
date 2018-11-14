<template>
    <Information :data="informationData" :style="{marginTop: '3rem'}" />  
</template>

<script>
import Information from '../Information/index'

const data = [
    { name: 'company', label: '公司', icon: '', },
    { name: 'address', label: '地址', icon: '', },
    { name: 'equipment', label: '设备', icon: '', },
    { name: 'model', label: '型号', icon: '', },
]

export default {
    name: 'BasicInformation',
    components: {
        Information,
    },
    data() {
        return {
            name: '基本信息',
            originalData: data,
        }
    },
    props: {
        ArrayData: {
            type: Array,
            required: true,
        },
    },
    computed: {
        informationData() {
            const originalData = this.originalData.slice().sort((a, b) => a.name[0].localeCompare(b.name[0]))
            const ArrayData = this.ArrayData.slice().sort((a, b) => a.name[0].localeCompare(b.name[0]))
            const result = originalData.map((item, i) => {
                return Object.assign({}, item, ArrayData[i])
            })
            return { name: this.name, list: result, }
        },
    }
}
</script>

<style lang="less" scoped>
.iconfont {
    font-size: 1.2em;
    color: #67baff;
}
span {
    margin-left: 5px;
}
</style>