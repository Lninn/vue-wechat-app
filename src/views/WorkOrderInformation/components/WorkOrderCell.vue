<template>
    <AppImgTextCells :data="filterData" :style="{marginTop: '3rem'}" />  
</template>

<style lang="less" scoped>
span {
    margin-left: 5px;
}
</style>

<script>
import { combinaArray } from '@/utils'

const cellData = [
    { name: 'number', label: '编号', icon: '', },
    { name: 'date', label: '创建时间', icon: '', },
]

export default {
    name: 'WorkOrderCell',
    data() {
        return {
            name: '工单信息',
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