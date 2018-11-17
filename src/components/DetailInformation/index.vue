<template>
    <AppImgTextCells :data="informationData" />  
</template>

<script>
import AppImgTextCells from '../AppImgTextCells/index'

const data = [
    { name: 'person', label: '联系人', icon: '', value: '毕淑敏', },
    { name: 'phone', label: '电话', icon: '', value: '15240114411', },
    { name: 'date', label: '日期', icon: '', value: '2010-10-21' },
    { name: 'number', label: '编号', icon: '', value: '20-jnf5512111414', },
]

export default {
    name: 'DetailInformation',
    components: {
        AppImgTextCells,
    },
    data() {
        return {
            name: '详细信息',
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