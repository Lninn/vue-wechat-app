<template>
    <AppImgTextCells :data="filterData" :style="{marginTop: '3rem'}" />  
</template>

<script>
import AppImgTextCells from '@/components/AppImgTextCells/index'
import { combinaArray } from '@/utils'

const cellData = [
    { name: 'number', label: '编号', icon: '', },
    { name: 'date', label: '创建时间', icon: '', },
]

export default {
    name: 'WorkOrderCell',
    components: {
        AppImgTextCells,
    },
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

<style lang="less" scoped>
span {
    margin-left: 5px;
}
</style>