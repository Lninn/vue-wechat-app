<template>
    <AppImgTextCells :data="filterData" />  
</template>

<script>
import AppImgTextCells from '@/components/AppImgTextCells/index'
import { combinaArray } from '@/utils'

const cellData = [
    { name: 'person', label: '联系人', icon: '', },
    { name: 'phone', label: '电话', icon: '', },
]

export default {
    name: 'ConnectCell',
    components: {
        AppImgTextCells,
    },
    data() {
        return {
            name: '联系信息',
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