<template>
    <AppImgTextCells :data="filterData" />  
</template>

<script>
import { combinaArray } from '@/utils'

const cellData = [
    { name: 'name', label: '名称', icon: '', },
    { name: 'model', label: '型号', icon: '', },
    { name: 'company', label: '公司', icon: '', },
    { name: 'address', label: '位置', icon: '', },
]

export default {
    name: 'EquipmentCell',
    data() {
        return {
            name: '设备信息',
            originalData: cellData,
        }
    },
    props: {
        ArrayData: {
            type: Array,
            required: true,
        },
    },
    computed: {
        filterData() {
            const tmp = combinaArray(this.originalData, this.ArrayData)
            return { name: this.name, list: tmp, }
        },
    }
}
</script>

<style lang="less" scoped>
span {
    margin-left: 5px;
}
</style>